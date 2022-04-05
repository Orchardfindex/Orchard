import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../lib/constants";
import { client } from "../lib/database";

export interface TransactionContextInterface {
  connectWallet: (metamask?: any) => Promise<void>;
  currentAccount: any;
  sendTransaction?: (metamask?: any, connectedAccount?: any) => Promise<void>;
  handleChange?: (event:React.ChangeEvent<HTMLInputElement>, name:string) => void;
  formData?:{
    addressTo: string;
    amount: string;
  }
}

export const TransactionContext = React.createContext<TransactionContextInterface>({} as TransactionContextInterface);

/* declare global {
  interface Window {
    ethereum: any;
  }
}
 */
let eth:any;

if (typeof window != "undefined") {
  eth = window.ethereum;
}

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(eth);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  console.log("get ethereum contract");
  return transactionContract;
};

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentAccount, setCurrentAccount] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
  });

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async (metamask = eth) => {

    try {
      if (!metamask) return alert("Please install metamask");
      const accounts = await metamask.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object..");
    }
  };

  const checkIfWalletIsConnected = async (metamask = eth) => {
    try {
      if (!metamask) return alert("Please Install metamask");

      const accounts = await metamask.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        console.log("Wallet is already connected");
      }
    } catch (error) {
      console.error(error);
      throw new Error("No ethereum object.");
    }
  };

  const sendTransaction = async (
    metamask = eth,
    connectedAccount = currentAccount
  ) => {
    try {
      if (!metamask) return alert("Please install metamask");
      const { addressTo, amount } = formData;
      const transactionContract = getEthereumContract();
      console.log(addressTo);

      const parsedAmount = ethers.utils.parseEther(amount);

      await metamask.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: "0x7EF40", // 52000 Gwei
            value: parsedAmount._hex,
          },
        ],
      });
      const transactionHash = await transactionContract.publishTransaction(
        addressTo,
        parsedAmount,
        `Transferring ETH ${parsedAmount} to ${addressTo}`,
        "TRANSFER"
      );

      setIsLoading(true);

      await transactionHash.wait();

      await saveTransaction(
        transactionHash.hash,
        amount,
        connectedAccount,
        addressTo
        );

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const saveTransaction = async (
    txHash: string,
    amount: string,
    toAddress: string,
    fromAddress = currentAccount
  ) => {
    const txDoc = {
      _type: "transactions",
      _id: txHash,
      fromAddress: fromAddress,
      toAddress: toAddress,
      timestamp: new Date(Date.now()).toISOString(),
      txHash: txHash,
      amount: parseFloat(amount),
    };

    await client.createIfNotExists(txDoc);

    await client
      .patch(currentAccount)
      .setIfMissing({ transactions: [] })
      .insert("after", "transactions[-1]", [
        {
          _key: txHash,
          _ref: txHash,
          _type: "reference",
        },
      ])
      .commit()
  };
  return (
    <TransactionContext.Provider
      value={{
        currentAccount,
        connectWallet,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
