import React from 'react';
import {FaDiscord, FaTwitter, FaTelegramPlane, FaGithub, FaYoutube, FaMediumM} from 'react-icons/fa';
import logo from '../../images/Orchard.svg';
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  Logo,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink} from './FooterElements';

const Footer = () => {
  return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
          <Logo src={logo} />
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">Contact</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Whitepaper</FooterLink>
                <FooterLink to="/signin">Partners</FooterLink>
                <FooterLink to="/signin">Terms of Use</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Developer</FooterLinkTitle>
                <FooterLink to="/signin">Docs</FooterLink>
                <FooterLink to="/signin">Github</FooterLink>
                <FooterLink to="/signin">Grants</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Participate</FooterLinkTitle>
                <FooterLink to="/signin">Community</FooterLink>
                <FooterLink to="/signin">Events</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinkContainer>
          <SocialMediaWrap>
            <SocialLogo to='/'></SocialLogo>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Discord">
                <FaDiscord />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Telegram">
                <FaTelegramPlane />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Medium">
                <FaMediumM />
              </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </FooterWrap>
      </FooterContainer>
  );
};

export default Footer;
