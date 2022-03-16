import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionContext.js";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const [userName, setUserName] = useState();

  useEffect(() => {
    if (!currentAccount) return;
    setUserName(`${currentAccount.slice(0,5)}...${currentAccount.slice(35,-1)}`);
    console.log("I am a", typeof currentAccount);
  }, [currentAccount]);

  return (
    <>
      <IconWrap to='#' > 
        <OpenIcon onClick={toggle} />
      </IconWrap>
      <SidebarContainer open={open}>
        <SidebarMenu>
          <IconWrap2 to='#'> 
            <CloseIcon onClick={toggle} />
          </IconWrap2>
          {SidebarData.map((item, index) => { //return navbar items
            return <SubMenu item={item} key={index} />; //pass item as argument
          })}
          <SideBtnWrap>
            <SidebarButton to='/connect'>Connect Wallet</SidebarButton>
          </SideBtnWrap>
        </SidebarMenu>
        <SideBtnWrap>
          {/* <SidebarRoute onClick={() => {
                connectWallet();
              }}>Connect Wallet</SidebarRoute> */}
          {currentAccount ? (
            <SidebarRoute><Link to="/dashboard">{userName}</Link></SidebarRoute>
          ) : (
            <SidebarRoute onClick={() => { connectWallet() }}>Connect Wallet</SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;