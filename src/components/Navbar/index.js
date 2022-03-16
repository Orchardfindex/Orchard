import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import logo from '../../images/Orchard.svg';
import Sidebar from '../Sidebar';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnWrap,
  NavBtn,
  SettingIcon,
  ArrowDown
} from './NavbarElements';

const Navbar = () => {
  
  return (
    <Nav >
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} width={50} height={50} alt="" />
          Orchard
        </NavLogo> 
        <Sidebar /> 
        
        <NavMenu>
          <NavItem>
            <NavLink to='/sprout' smooth={true} duration={500}>
              Sprout
            </NavLink>
          </NavItem>

          <NavItem >
            <NavLink to='/farm' smooth={true} duration={500}>
              Earn <ArrowDown />
            </NavLink>
          </NavItem>
        
          <NavItem>
            <NavLink to='/trade' smooth={true} duration={500}>
              Trade {<ArrowDown />}
            </NavLink>
          </NavItem>
        
          <NavItem>
            <NavLink to='/dashboard' smooth={true} duration={500}>
              Dashboard
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/analytics' smooth={true} duration={500}>
              Analytics
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/others' smooth={true} duration={500}>
              Others {<ArrowDown />}
            </NavLink>
          </NavItem>
 
          <NavBtnWrap>
              <NavBtn to='/connect'>
                Connect Wallet
              </NavBtn>
            <SettingIcon>
              <IoMdSettings />
            </SettingIcon>
          </NavBtnWrap>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
