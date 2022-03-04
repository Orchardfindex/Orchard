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
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Sprout</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>Earn</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>Trade</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>Dashboard</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>Analytics</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>Others</SidebarLink>
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
