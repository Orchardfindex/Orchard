import React from 'react';
import Icon1 from '../../images/fruitti.svg';
import Icon2 from '../../images/setprotocol.svg';
import Icon3 from '../../images/polygon.svg';
import {
  CardContainer, 
  //CardH1,
  CardWrapper,
  CardCard,
  CardIcon,
  CardH2,
  CardP
} from './CardElements';

const Card = () => {
  return (
    <CardContainer id="services">
      <CardWrapper>
        <CardCard>
          <CardIcon src={Icon1} />
          <CardH2>Earn Passive Income with our Sprout Index Fund</CardH2>
          <CardP>Get rewarded with Fruitti tokens and compound interests via Yield Farming</CardP>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon2} />
          <CardH2> Set Protocol, Industry-Leading Protocol for DeFi Index</CardH2>
          <CardP>A DeFi platform to create, rebalance and manage portfolios of ERC-20 tokenized assets</CardP>
        </CardCard>

        <CardCard>
          <CardIcon src={Icon3} />
          <CardH2>Join the Polygon Community</CardH2>
          <CardP>Join a vibrant community, #Polygon, and shape the future of Orchard</CardP>
        </CardCard>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
