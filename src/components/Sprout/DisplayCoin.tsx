import React from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./Sprout.css";

const DisplayCoin = (data: any) => {
  let coin_url = "https://www.coingecko.com/en/coins/";

  return (
    <>
      {data?.map((coin:any, index:any)=>(
        <a href={coin_url+coin.id} target="_blank" rel="noopener noreferrer" key={`coin-${index}`}>
          <div className="card">
            <div className="top" id="{key=coin.id}">
              <img src={coin.image} alt={coin.name} />
            </div>
            <div>
              <h5>{coin.name}</h5>
              <p>${coin.current_price.toLocaleString()}</p>
            </div>
            {coin.price_change_percentage_24h < 0 ? (
              <div className="red p24h">
                <FiArrowDown className="icon" />
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            ) : (
              <div className="green p24h">
                <FiArrowUpRight className="icon" />
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            )}
          </div>
        </a>
      ))}
    </>
  );
};

export default DisplayCoin;
