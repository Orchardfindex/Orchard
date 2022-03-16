import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const InfoContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? '#000' : '#FFF')};

  @media screen and (max-width: 500px) {
    padding-top: 3.125rem; //Space bet HeroSection, InfoContainer & CardContainer
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 37.5rem; 
  width: 100%;
  max-width: 1728px;
  margin: auto;
  z-index: 1;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr);
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  align-items: center;

  @media screen and (max-width: 864px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px; //space bet text & image
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 31.25rem;
`;

export const TopLine = styled.p`
  color: #00A200;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.075rem;
  text-transform: uppercase; 
  margin-bottom: 0.875rem;
`;

export const Heading = styled.h1` 
  font-size: 2.625rem;
  font-weight: 700;
  margin-bottom: 0.875rem;
  color: ${({lightText}) => (lightText ? '#000' : '#fff')};
  
  @media screen and (max-width: 864px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.563rem;
  margin-bottom: 1.875rem;
  max-width: 30rem;
  color: ${({darkText}) => (darkText ? '#fff' : '#000')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const InfoButton = styled(Button)`
  ${Button};

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`;

export const ImgWrap = styled.div`
  max-width: 31.25rem;
  margin: auto;
`;

export const Img = styled.img`
  width: 100%;
  height: auto; //responsive
  border-radius: 1.25rem;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    max-height: 20rem; 
  }
`;