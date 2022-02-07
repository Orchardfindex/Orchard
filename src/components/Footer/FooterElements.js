import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #E2E2E2;
`

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 25px;
  max-width: 1728px;
  margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
  display: flex;
  position: absolute:

  @media screen and (max-width: 864px) {
    padding-top: 30px;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 428px) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  display: flex;
  position: relative;
  align-items: center;
  width: 100px;
  height: 100px;
  left: -275px;
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
  margin: 15px;
  width: 150px;
  text-align: left;
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
  justify-content: center;
  align-items: center;
  max-width: 1728px;

  padding: 50px 25px;
  margin: 0 auto;

  @media screen and (max-width: 864px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
`




