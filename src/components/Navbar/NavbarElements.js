import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;  
  background: #F9FEF9; 
  height: 80px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1728px;
  padding: 0 25px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)` 
  display: flex;
  grid-column-gap: 10px;
  justify-self: flex-start;
  align-items: center;
  color: #00A200;
  font-size: 36px;
  font-weight: bold;
  margin-left: 10px;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 428px) {
    margin-left: 0px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 28px;
    color: #000;
    transform: translate(-100%, 60%); //position 
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: auto;
  list-style: none;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px; 
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 18px;
  font-weight: 500;
  padding: 0 15px;
  height: 100%;
  text-decoration: none;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #00B200;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 1100px) { 
    display: none;
  }
`;

//export const NavBtnLink = styled(LinkR)`
export const NavBtnLink = styled.div`
  background: #00B200;
  border: 1.5px solid #E2E2E2;
  border-radius: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #00F200;
    color: #000;
    transition: all 0.2s ease-in-out;
  }
`;

export const SettingIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #00A200;
    transition: all 0.2s ease-in-out;
  }
`;
