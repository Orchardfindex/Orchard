import React, { useState, useEffect, Suspense } from 'react'
import './App.css'
import './dist/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import { TransactionProvider } from './context/TransactionContext'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import Sprout from './pages/Sprout'
import Swap from './pages/SwapV2'

import { BLACKLIST_WALLETS } from 'constants/index'
import { ApolloProvider } from '@apollo/client'
import GoogleAnalyticsReporter from 'components/GoogleAnalyticsReporter'
import DarkModeQueryParamReader from './theme/DarkModeQueryParamReader'
import { defaultExchangeClient } from 'apollo/client'
import Loader from 'components/LocalLoader'
import Web3ReactManager from './components/Web3ReactManager'
import { ChainId } from '@dynamic-amm/sdk'
import { useActiveWeb3React } from 'hooks'
import { useExchangeClient } from 'state/application/hooks'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'state'
import { setGasPrice } from 'state/application/actions'
import { ethers } from 'ethers'
import useTheme from 'hooks/useTheme'
import { useWindowSize } from 'hooks/useWindowSize'
import { useIsDarkMode } from 'state/user/hooks'
import { useGlobalMixpanelEvents } from 'hooks/useMixpanel'
import Popups from 'components/Popups'
import Header from 'components/Header'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  z-index: 3;
`

const BodyWrapper = styled.div<{ isAboutPage?: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  align-items: center;
  min-height: calc(100vh - 148px);
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
`

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    //function toggle true or false
    setIsOpen(!isOpen)
    console.log('isOpen: ', isOpen)
  }
  const { account, chainId, library } = useActiveWeb3React()

  const apolloClient = useExchangeClient()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const fallback = () => {
      library
        ?.getGasPrice()
        .then(res => {
          console.log('[gas_price] full node: ', res.toString() + ' wei')
          dispatch(setGasPrice({ standard: res.toString() }))
        })
        .catch(e => {
          dispatch(setGasPrice(undefined))
          console.error(e)
        })
    }
    const fetchGas = (chain: string) => {
      if (!chain) {
        fallback()
        return
      }
      fetch(process.env.REACT_APP_KRYSTAL_API + `/${chain}/v2/swap/gasPrice`)
        .then(res => res.json())
        .then(json => {
          if (!!json && !json.error && !!json.gasPrice) {
            console.log('[gas_price] api: ', json.gasPrice.standard + ' gwei')
            dispatch(setGasPrice({ standard: ethers.utils.parseUnits(json.gasPrice.standard, 'gwei').toString() }))
          } else {
            fallback()
          }
        })
        .catch(e => {
          fallback()
        })
    }

    let interval: any = null
    const chain =
      chainId === ChainId.MAINNET
        ? 'ethereum'
        : chainId === ChainId.BSCMAINNET
        ? 'bsc'
        : chainId === ChainId.AVAXMAINNET
        ? 'avalanche'
        : chainId === ChainId.MATIC
        ? 'polygon'
        : chainId === ChainId.FANTOM
        ? 'fantom'
        : chainId === ChainId.CRONOS
        ? 'cronos'
        : ''
    if (!!chainId) {
      fetchGas(chain)
      interval = setInterval(() => fetchGas(chain), 10000)
    } else dispatch(setGasPrice(undefined))
    return () => {
      clearInterval(interval)
    }
  }, [chainId, dispatch])

  const theme = useTheme()
  const isDarkTheme = useIsDarkMode()

  const { width } = useWindowSize()
  useGlobalMixpanelEvents()

  return (
    <>
      {(!account || !BLACKLIST_WALLETS.includes(account)) && (
        // <TransactionProvider>
        <ApolloProvider client={apolloClient || defaultExchangeClient}>
          <Route component={DarkModeQueryParamReader} />

          {/* <Router> */}
          <HeaderWrapper>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
          </HeaderWrapper>
          <Suspense fallback={<Loader />}>
            <Popups />
            <Web3ReactManager>
              <Switch>
                <Route exact strict path="/" component={HomePage} />
                <Route exact strict path="/Sprout" component={Sprout} />
                <Route exact strict path="/Swap" component={Swap} />
              </Switch>
            </Web3ReactManager>
          </Suspense>
          {/* </Router> */}
        </ApolloProvider>
        // </TransactionProvider>
      )}
    </>
  )
}

export default App
