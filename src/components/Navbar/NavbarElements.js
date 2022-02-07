import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
  display: flex;  
  background: #E2E2E2; 
  height: 80px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: sticky;
  z-index: 10;

  @media screen and (max-width: 864px) {
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
  gap: 10px;
  justify-self: flex-start;
  align-items: center;
  color: #00A200;
  font-size: 36px;
  font-weight: bold;
  margin-left: 25px;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 428px) {
    display: block;
    position: absolute;
    font-size: 28px;
    color: #000;
    transform: translate(-100%, 50%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-right: -20px;
  list-style: none;

  @media screen and (max-width: 428px) {
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
    border-bottom: 3px solid #00bb00;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 864px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  background: #00B200;
  border-radius: 50px;
  color: #000;
  font-size: 16px;
  padding: 10px 20px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #00F200;
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
