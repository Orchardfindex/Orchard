<<<<<<< HEAD
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionContext.js";
//import Dropdown from './Dropdown';
import { FaBars } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import logo from "../../images/Orchard.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  SettingIcon,
} from "./NavbarElements";

export default function Navbar({ toggle }) {
  const { connectWallet, currentAccount } = useContext(TransactionContext);
  const [userName, setUserName] = useState();

  useEffect(() => {
    if (!currentAccount) return;
    setUserName(
      `${currentAccount.slice(0, 5)}...${currentAccount.slice(35, -1)}`
    );
  }, [currentAccount]);

  console.log({ connectWallet, currentAccount });

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} alt="" width={50} height={50} />
          Equator
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks>
              <Link to="/Sprout">Equator</Link>
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/">
              <Link to="/Swap">Trade</Link>
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="earn">Earn</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="dashboard">Dashboard</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="analytics">Analytics</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="others">Others</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          {currentAccount ? (
            <NavBtnLink>
              <Link to="/dashboard">{userName}</Link>
            </NavBtnLink>
          ) : (
            <NavBtnLink
              onClick={() => {
                connectWallet();
              }}
            >
              Connect Wallet
            </NavBtnLink>
          )}
          <SettingIcon onClick={toggle}>
            <IoMdSettings />
          </SettingIcon>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}
=======
import React, {useState} from 'react';
//import { Link } from 'react-router-dom';
//import Dropdown from './Dropdown';
import { FaBars } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import logo from '../../images/Orchard.svg';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  SettingIcon
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/"><img src={logo} alt="" width={50} height={50} />Orchard</NavLogo> 
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="sprout">Sprout</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="earn">Earn</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="trade">Trade</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="dashboard">Dashboard</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="analytics">Analytics</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="others">Others</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sigin">Connect Wallet</NavBtnLink>
          <SettingIcon onClick={toggle}>
            <IoMdSettings />
          </SettingIcon>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
>>>>>>> fe65879090ec61adb52026f47a1925ba748fa219
