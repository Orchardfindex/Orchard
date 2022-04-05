import React from 'react'
import { Button } from '../ButtonElements/ButtonElements'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements'

interface Props {
  lightBg?: boolean
  id?: string
  imgStart?: boolean
  topline?: string
  lightText?: boolean
  headline?: string
  darkText?: boolean
  description?: string
  buttonLabel?: string
  img?: any
  primary?: boolean
}

const InfoSection: React.FC<Props> = ({
  //note synta
  lightBg,
  id,
  imgStart,
  topline,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  primary,
}: Props) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topline}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true} //assign smooth scroll class
                  exact="true"
                  offset={-80} //nav bar height
                  primary={primary ? 1 : 0} //return true or false
                  //dark={dark ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
