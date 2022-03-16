import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle` 
* {
    box-sizing: border-box;
    margin: 0; // Remove white space
    padding: 0;
    font-family:'Open Sans', sans-serif; 
}
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1728px;
    margin: 0 auto;
    padding: 0px 50px;
    z-index: 1;
    
    @media screen and (max-width: 1024px) {
    padding: 0px 30px;
    }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.875rem;
  color: #FFF;
  background: #0467FB;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  padding: ${({big}) => (big ? '15px 40px' : '10px 25px')};
  border: none;
  outline: none;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.3s ease-out;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;  

export const Button2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dfdfdf;
  padding: 10px 20px;
  border: 1.5px solid transparent;
  border-radius: 10px;
  background: linear-gradient(#191970, #191970) padding-box, linear-gradient(90deg, #27b0e6, #ff3838) border-box;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`

export const h2 = styled.h2`
  font-size: 1.5rem;
  text-align: left;
`;

export const h3 = styled.h3`
  font-size: 1.25rem;
  text-align: left;
`;

export const p = styled.p`
  font-size: 1rem;
  text-align: left;
`
export default GlobalStyle;