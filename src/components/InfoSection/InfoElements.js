import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#000' : '#E2E2E2')};

  @media screen and (max-width: 864px) {
    padding: 75px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  height: 800px;
  width: 100%;
  max-width: 1728px;
  padding: 0 25px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  z-index: 1;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
  align-items: center;

  @media screen and (max-width: 864px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #00A200;
  font-size: 24px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 1.5px;
  text-transform: uppercase; 
  margin-bottom: 15px;
`;

export const Heading = styled.h1` 
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 25px;
  color: ${({lightText}) => (lightText ? '#000' : '#fff')};
  
  @media screen and (max-width: 864px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 30px;
  max-width: 480px;
  color: ${({darkText}) => (darkText ? '#fff' : '#000')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 450px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin-left: 10px;
`;