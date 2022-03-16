import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './Data';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import styled from 'styled-components';
import SubMenu from './SubMenu';

const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  background: #FFF;
  position: fixed;
  right: ${({ open }) => (open ? '0' : '-100%')}; //open sidebar from right
  z-index: 10;
  transition: 0.3s ease-in-out;
`;

const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;

  
  @media screen and (max-width: 428px) {
    bottom: 5rem;
  }
`;

const IconWrap = styled(Link)`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    top: 0;
    margin-right: 1.25rem;
    font-size: 1.875rem;
    outline: none;
  }
`;

const IconWrap2 = styled(Link)`
  display: none;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    top: 0.5rem;
    font-size: 1.875rem;
    outline: none;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.25rem auto; //center button
`;

const SidebarButton = styled(Button)`
  width: 10rem;
  padding: 0.875rem 1.25rem;
  ${Button};
`;

const OpenIcon = styled(FaBars)`
  color: #000;
  font-size: 1.25rem;
`;

const CloseIcon = styled(FaTimes)`
  color: #000;
  font-size: 1.25rem;
`;

const Sidebar = () => {
  const [open, setOpen] = useState(false); //open is false
  const toggle = () => setOpen(!open); //update state to true, show sidebar

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
      </SidebarContainer>
    </>
  );
};

export default Sidebar;