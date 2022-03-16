import React from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../../globalStyles';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowUpRight
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
       <HeroH1>A Specially Curated Sprout Index Fund</HeroH1>
        <HeroP>To earn real-time returns and long-term capital growth on your assets!</HeroP>
        <HeroBtnWrapper>
            <Button to="buy">
              Buy Sprout {<ArrowUpRight />}
            </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
