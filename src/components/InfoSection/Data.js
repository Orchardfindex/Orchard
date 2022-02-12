//reusable component
export const HomeObj1 = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDescrip: true,
  topline: 'Transak',
  headline: 'A Fiat-to-Crypto Payment Gateway',
  description: 'Access our on-ramp payment solution using credit/debit cards with ZERO gas fees on Polygon Network!',
  buttonLabel: 'Explore Transak',
  imgStart: false, //if true image starts on left
  img: require('../../images/creditcard.svg').default, //requires .default for V4.0 react script onwards
  primary: true,
  dark: true,
  darkText: false
};

export const HomeObj2 = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDescrip: true,
  topline: 'OrchardSwap',
  headline: 'Our Custom-Design DEX',
  description: 'A peer-peer marketplace to allow crypto token exchange using AMM as our fundamental strategy, built and adapted from Uniswap V3!',
  buttonLabel: 'Explore OrchardSwap',
  imgStart: false, 
  img: require('../../images/Uniswap.jpg'),
  primary: true,
  dark: true,
  darkText: false
};

export const HomeObj3 = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDescrip: true,
  topline: 'Get Started',
  headline: "A Beginner's Guide to DeFi Ecosystem",
  description: 'Access our step-by-step flowchart to purchase, trade, borrow/lend and farm on your crypto assets!',
  buttonLabel: 'Explore Help Guide',
  imgStart: false, 
  img: require('../../images/Defi.jpg'),
  primary: true,
  dark: true,
  darkText: false
};