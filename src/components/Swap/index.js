import { useContext } from 'react';
import { RiSettings3Fill } from 'react-icons/ri';
import { AiOutlineDown } from "react-icons/ai";
import ethlogo from '../../images/eth.png';
import { TransactionContext } from '../../context/TransactionContext';

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#FFFFFF] w-[40rem] rounded-2xl p-4 text-[#000000] border border-[#000000]`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl text-[#000000]`,
  transferPropContainer: `bg-[#FFFFFF] my-3 rounded-2xl p-6 text-3xl border border-[#000000] hover:border-[#41444F] flex justify-between`,
  transferPropInput:
    "bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl",
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min  text-[#000000] flex justify-between items-center bg-[#FFFFFF] hover:bg-[#FFFFFF]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#00B200] my-2 text-[#FFFFFF] rounded-3xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#00B200] hover:bg-[#00F200] hover:text-[#000]`
};

const Swap = () => {
  const { formData, handleChange, sendTransaction } = useContext(TransactionContext);
  const handleSubmit = async (e) => {
    const { amount, addressTo } = formData;
    e.preventDefault();
    
    if (!addressTo || !amount) return;

    sendTransaction();
  }
  
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Swap</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.0"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => handleChange(e, 'amount')}
          />
          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <img src={ethlogo} alt="eth logo" height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>ETH</div>
              <AiOutlineDown
                className={style.currencySelectorArrow}
              ></AiOutlineDown>
            </div>
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0x..."
            onChange={(e) => handleChange(e, 'addressTo')}
          />
          <div className={style.currencySelector}></div>
        </div>
        <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>Swap</div>
      </div>
    </div>
  );
};

export default Swap;
