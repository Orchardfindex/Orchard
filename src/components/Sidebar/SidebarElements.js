import styled from 'styled-components';
//import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: #F9FEF9;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 25px;
  background: transparent;
  font-size: 30px;
  outline: none;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: #000;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 75px);
  text-align: center;

  @media screen and (max-width: 428px) {
    grid-template-rows: repeat(6, 50px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #000;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    color: #00B200;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SidebarRoute = styled.div`
  border-radius: 50px;
  border: none;
  background: #00B200;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding: 15px 35px;
  white-space: nowrap;
  outline: none;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    background: #00F200;
    color: #000;
    transition: all 0.2s ease-in-out;
  }
`;
