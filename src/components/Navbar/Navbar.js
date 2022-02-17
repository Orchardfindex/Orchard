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
        <NavLogo to="/"><img src={logo} alt="" width={50} height={50} />Orchar</NavLogo> 
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
