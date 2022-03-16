import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

export const Nav = styled.nav`
  display: flex;  
  justify-content: center;
  align-items: center;
  background: #FFF; 
  height: 80px;
  font-size: 1.25rem; 
  position: absolute sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 1024px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between; 
  position: absolute;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)` 
  display: flex;
  justify-self: start;
  align-items: center;
  color: #00A200;
  font-size: 2rem;
  font-weight: bold;
  margin-left: 0.625rem;
  column-gap: 0.625rem;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 428px) {
    margin-left: 0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  list-style: none;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem; 
  border: none;

  &:hover {
    height: 2.5rem; 
    border-bottom: 2px solid #4B59F7;
  }

  @media screen and (max-width: 428px) {
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0rem 1rem;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
`;

export const NavBtnWrap = styled.div` //button and setting icon container
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 10rem; 
  gap: 0.625rem;
  transition: all 0.3s ease;

  @media screen and (max-width: 1280px) { 
    left: 6.25rem; 
  }

  @media screen and (max-width: 1024px) { 
    display: none;
  }
`;

export const NavBtn = styled(Button)`
  width: 10rem;
  height: 2.5rem;
  font-size: 1.125rem;
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  ${Button};
`;

export const SettingIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.875rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #0467FB;
    transition: all 0.3s ease;
  }
`;

export const ArrowDown = styled(FaCaretDown)`
  font-size: 0.875rem;
  padding-left: 0.25rem;
`;

export const ArrowUp = styled(FaCaretUp)`
  font-size: 0.875rem;
  padding-left: 0.25rem;
`;
