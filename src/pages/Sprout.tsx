/* eslint-disable @typescript-eslint/camelcase */
import React from 'react'
import '../components/Sprout/Sprout.css'
import index_components from '../components/Sprout/index_component.json'
import useFetch from '../utils/useFetch'
import AllocationTable from '../components/Sprout/AllocationTable'
import DisplayCoin from '../components/Sprout/DisplayCoin'
import Loader from '../utils/loader'

const Sprout = () => {
  let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids='

  for (let i = 0; i < index_components.length; i++) {
    url = url + index_components[i].name
    if (i !== index_components.length - 1) url = url + '%2C'
  }

  url = url + '&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  console.log(url)

  const { data, loading, error } = useFetch(url)

  console.log(data)

  if (loading) {
    console.log('Loading....')
    return <Loader />
  }

  if (error) console.log(error)

  return (
    <div className="Sprout">
      <div className="container">
        <div className="left">
          <div>
            <div>
              <h2>Sprout Index Token</h2>
            </div>
            <div className="current_price_container">
              <div className="current_price_inner_container">
                <div className="current_price_div">
                  CURRENT PRICE
                  <br />
                  <h3>$164.07</h3>
                </div>
                <div>
                  CHANGE
                  <br />
                  <h3 className="red">-2.67%</h3>
                </div>
              </div>
              <div>
                <button className="btn">Buy Sprout</button>
              </div>
            </div>
            <div>
              <p>Own all the top Cryptos in One Single Token</p>
              <p>
                The <strong>Sprout Index</strong> is capitalization-weighted index the tracks the performance of the
                decentralized assets across the Market
              </p>
            </div>
            <div className="stat_container">
              <div className="stat">
                MARKET CAP
                <br />
                <h3>$776.7M</h3>
              </div>
              <div className="stat">
                VOLUME
                <br />
                <h3>$62.8M</h3>
              </div>
              <div className="stat">
                CURRENT SUPPLY
                <br />
                <h3>2,992,222</h3>
              </div>
              <div className="stat">
                STEAMING FEE
                <br />
                <h3>0.95%</h3>
              </div>
            </div>
            <div className="tableContainer">{AllocationTable(data, index_components)}</div>
          </div>
        </div>

        <div className="right">{DisplayCoin(data)}</div>
      </div>
    </div>
  )
}

export default Sprout
