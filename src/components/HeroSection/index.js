import React from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowUpRight2
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
              Buy Sprout {<ArrowUpRight2 />}
            </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
