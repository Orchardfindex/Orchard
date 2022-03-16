import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { AiOutlineCopyright } from "react-icons/ai";

export const FooterContainer = styled.footer`
  background-color: #FFF;
`

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  max-width: 1728px;
  margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
  display: flex;
`

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 428px) {
    flex-direction: column; 
  }
`

export const Logo = styled.img`
  display: flex;
  align-items: center;
  position: relative;
  left: -12.5rem;
  width: 5rem;
  height: 5rem;

  @media screen and (max-width: 1024px) {
    left: -9.375rem;
  }

  @media screen and (max-width: 428px) {
    display: none;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  color: #000;
  width: 9.375rem;
  margin: 0.938rem;
  box-sizing: border-box;

  @media screen and (max-width: 428px) {
    padding: 0.625rem;
    width: 100%;
    margin: 0;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 1.125rem;
  letter-spacing: 0.075rem;
  margin-bottom: 0.875rem;
`

export const FooterLink = styled(Link)`
  color: #000;
  font-size: 1rem;
  letter-spacing: 0.075rem;
  margin-bottom: 0.625rem;
  text-decoration: none;

  &:hover{
    color: #00B200;
    transition: 0.3s ease-out;
  }
`

export const SocialMediaWrap = styled.div`
  display: flex; 
  position: relative;           
  justify-content: center;
  align-items: center;
  padding: 3.125rem 1.25rem;
  max-width: 1728px;
  margin: 0 auto;
  left: 9.375rem;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    left: 0;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15.625rem;
`

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 1.5rem;
  cursor: pointer;
`

export const Copyright = styled.div`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  left: 16.875rem;

  @media screen and (max-width: 1024px) { 
    left: 5rem; 
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap; //next line
    left: 0px;
    padding-top: 0.625rem;
  }
`
export const CopyrightP = styled.p`
  display: flex; 
  justify-content: center;
  align-items: center; 
  color: #000;
  font-size: 1rem;

  @media screen and (max-width: 1024px) { 
    left: 80px; 
  }
`

export const CopyrightIcon = styled(AiOutlineCopyright)`
  font-size: 1rem;
  padding-right: 0.15rem;
`
