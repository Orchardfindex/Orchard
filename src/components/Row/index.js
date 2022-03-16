import React from 'react'
import {
  RowContainer, 
  RowWrapper,
  RowCard, 
  RowWrap,
  RowH2, 
  RowP,
  RowBtnWrapper,
  RowButton
} from './RowElements'
  
const Row = () => {
  return (  
  <RowContainer>
      <RowWrapper>
        <RowCard>
          <RowH2>Farming</RowH2>
          <RowP>Stake liquidity pool tokens to earn rewards in OrchardSwap</RowP>
          <RowP>TVL: $114.2M</RowP>
        </RowCard>
        <RowWrap>
          <RowH2>Sprout to Harvest</RowH2>
          <RowP>0 tokens</RowP>
          <RowP>$0.00</RowP>
          <RowBtnWrapper>
            <RowButton to="harvest">Harvest All</RowButton>
          </RowBtnWrapper>
        </RowWrap>
      </RowWrapper>
  </RowContainer>
  )
};

export default Row;