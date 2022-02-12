import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? '#000' : '#F9FEF9')};

  @media screen and (max-width: 500px) {
    padding-top: 50px; //Space bet HeroSection, InfoContainer & CardContainer
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 600px; 
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

  @media screen and (max-width: 834px) {
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
  max-width: 500px;
`;

export const TopLine = styled.p`
  color: #00A200;
  font-size: 28px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.4px;
  text-transform: uppercase; 
  margin-bottom: 15px;
`;

export const Heading = styled.h1` 
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 15px;
  color: ${({lightText}) => (lightText ? '#000' : '#fff')};
  
  @media screen and (max-width: 864px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 30px;
  max-width: 480px;
  color: ${({darkText}) => (darkText ? '#fff' : '#000')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;