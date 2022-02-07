import React from 'react';
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
          <SidebarRoute to="/connect">Connect Wallet</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
