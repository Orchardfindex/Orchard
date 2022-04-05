import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TransactionContext } from '../../context/TransactionContext'
//import Dropdown from './Dropdown';
import { FaBars } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import logo from '../../images/Orchard.svg'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  SettingIcon,
} from './NavbarElements'
import Web3Network from 'components/Web3Network'
import Web3Status from 'components/Web3Status'
import styled, { keyframes } from 'styled-components'
import { useETHBalances } from 'state/wallet/hooks'
import { ChainId } from '@dynamic-amm/sdk'
import { useActiveWeb3React } from 'hooks'
import { Text } from 'rebass'
import Settings from 'components/Settings'

export interface Toggle {
  toggle: any
}

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 8px;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  :focus {
    border: 1px solid blue;
  }
`
const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    width: 100%;
    padding: 1rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 98;
    height: 72px;
    border-radius: 12px 12px 0 0;
    background-color: ${({ theme }) => theme.bg1};
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: center;
  `};
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
`

const BalanceText = styled(Text)`
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const Navbar: React.FC<Toggle> = ({ toggle }) => {
  // const { connectWallet, currentAccount } = useContext(TransactionContext);
  // const [userName, setUserName] = useState<string | undefined>();
  const { account, chainId } = useActiveWeb3React()
  const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']

  // useEffect(() => {
  //   if (!currentAccount) return;
  //   setUserName(
  //     `${currentAccount.slice(0, 5)}...${currentAccount.slice(35, -1)}`
  //   );
  // }, [currentAccount]);

  // console.log({ connectWallet, currentAccount });

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} alt="" width={50} height={50} />
          Orchard
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks>
              <Link to="/Sprout">Sprout</Link>
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks>
              <Link to="/Swap">Trade</Link>
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks>Earn</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks>Dashboard</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks>Analytics</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks>Others</NavLinks>
          </NavItem>
        </NavMenu>
        <HeaderControls>
          <HeaderElement>
            <Web3Network />
            <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
              {account && userEthBalance ? (
                <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                  {userEthBalance?.toSignificant(4)}{' '}
                  {chainId && [1, 3, 4, 5, 42].includes(chainId)
                    ? `ETH`
                    : chainId && [137, 80001].includes(chainId)
                    ? `MATIC`
                    : chainId && [56, 97].includes(chainId)
                    ? `BNB`
                    : chainId && [43113, 43114].includes(chainId)
                    ? `AVAX`
                    : chainId && [250].includes(chainId)
                    ? `FTM`
                    : chainId && [25, 338].includes(chainId)
                    ? `CRO`
                    : chainId && [199, 1028].includes(chainId)
                    ? 'BTT'
                    : chainId && [ChainId.VELAS, 111].includes(chainId)
                    ? 'VLX'
                    : chainId && [ChainId.OASIS].includes(chainId)
                    ? 'ROSE'
                    : `ETH`}
                </BalanceText>
              ) : null}
              <Web3Status />
            </AccountElement>
          </HeaderElement>
          {/* <HeaderElementWrap>
            <Settings />
          </HeaderElementWrap> */}
        </HeaderControls>
        {/* <NavBtn>
          {currentAccount ? (
            <NavBtnLink>
              <Link to="/dashboard">{userName}</Link>
            </NavBtnLink>
          ) : (
            <NavBtnLink
              onClick={() => {
                connectWallet();
              }}
            >
              Connect Wallet
            </NavBtnLink>
          )}
          <SettingIcon onClick={toggle}>
            <IoMdSettings />
          </SettingIcon>
        </NavBtn> */}
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
