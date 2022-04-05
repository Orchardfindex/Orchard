import styled from 'styled-components'
import { ImArrowUpRight2 } from 'react-icons/im'

interface Props {
  type: any
}

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fef9;
  height: 600px;
  padding: 0 30px;
  position: relative;
  z-index: 1;
`

export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video<Props>`
  width: 100%;
  height: 100%;
  background: #e2e2e2;
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
  z-index: 3;
`
export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  text-align: center;

  @media screen and {
    max-width: 864px;
  }
   {
    font-size: 48px;
  }
  @media screen and {
    max-width: 428px;
  }
   {
    font-size: 32px;
  }
`

export const HeroP = styled.p`
  color: #fff;
  font-size: 28px;
  max-width: 600px;
  margin-top: 25px;
  text-align: center;

  @media screen and {
    max-width: 864px;
  }
   {
    font-size: 24px;
  }
  @media screen and {
    max-width: 428px;
  }
   {
    font-size: 20px;
  }
`

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const ArrowUpRight2 = styled(ImArrowUpRight2)`
  font-size: 20px;
  margin-left: 10px;
`
