import styled from 'styled-components';
import { ImArrowUpRight2 } from 'react-icons/im';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  height: 600px;
  padding: 0 30px;
  position: relative;
`

export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  background: #E2E2E2;
  -o-object-fit: cover; 
  object-fit: cover;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  padding: 10px 25px;
  max-width: 864px; 

`
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 52px;
  text-align: center;

  @media screen and (max-width: 864px) {
    font-size: 48px;
  }
  @media screen and (max-width: 428px) {
    font-size: 32px;
  }
`

export const HeroP = styled.p`
  color: #fff;
  font-size: 28px;
  max-width: 600px;
  margin-top: 25px;
  text-align: center;
 
  @media screen and (max-width: 864px) {
    font-size: 24px;
  }
  @media screen and (max-width: 428px) {
    font-size: 20px;
  }
`

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const ArrowUpRight = styled(ImArrowUpRight2)`
  font-size: 20px;
  margin-left: 10px;
`
