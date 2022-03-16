import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

const SidebarLink = styled(Link)` //sidebar container
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-size: 1.25rem;
  height: 3.125rem; 
  padding: 1.25rem 0;
  position: relative;
  top: 1.25rem;
  list-style: none;
  text-decoration: none;

  &:hover {
    color: #0467FB;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span` //sidebar items
  margin-left: 3rem; 
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: #000;
  font-size: 1.25rem;
  height: 3.125rem;
  list-style: none;
  text-decoration: none;
  
  &:hover {
    color: #0467FB;
    cursor: pointer;
  }
`;

const SubMenu = ({item}) => {
  const [drop, setDrop] = useState(false);
  const showSubNav = () => setDrop(!drop); //toggle dropdown

  return ( 
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubNav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && drop //condition item.subNav present & drop is click
            ? <RiArrowUpSFill /> //return
            : item.subNav //condition
            ? <RiArrowDownSFill /> //return
            : null} 
        </div>
      </SidebarLink>
      {drop &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;