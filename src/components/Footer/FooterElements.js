import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #F9FEF9;
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
  left: -200px;
  width: 75px;
  height: 75px;

  @media screen and (max-width: 1024px) {
    left: -150px;
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
  width: 150px;
  margin: 15px;
  box-sizing: border-box;

  @media screen and (max-width: 428px) {
    padding: 10px;
    width: 100%;
    margin: 0;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  letter-spacing: 1.2px;
  margin-bottom: 15px;
  font-weight: 600;
`

export const FooterLink = styled(Link)`
  color: #000;
  font-size: 14px;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
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
  padding: 50px 25px;
  max-width: 1728px;
  margin: 0 auto;
  left: 150px;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    left: 0px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
`

export const Copyright = styled.div`
  display: flex;
  position: relative;
  left: 275px;

  @media screen and (max-width: 1024px) { 
    left: 80px; 
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap; //next line
    left: 0px;
    padding-top: 10px;
  }
`
export const CopyrightP = styled.p`
  display: flex; 
  align-items: center; //centre copyright icon
  color: #000;
  font-size: 16px;
  font-style: italic;
`




