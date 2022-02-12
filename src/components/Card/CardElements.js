import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F9FEF9;
  height: 500px;

  @media screen and (max-width: 1024px) {
    height: 700px;
  }
  
  @media screen and (max-width: 500px) {
    height: 1150px;
  }
`

export const CardWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 25px; //horizontal space bet cards
  max-width: 1728px;
  margin: 0 auto; 
  
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 25px; //vertical space bet cards
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 0; //space bet cards
    padding-top: 150px;
  }
`

export const CardCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #F9FEF9;
  border: 1.5px solid #E2E2E2;
  border-radius: 15px;
  height: 325px;//Determine Height of CardContainer
  width: 350px;
  padding: 25px; //space between card and elements
  transition: all 0.2 ease-in-out;
  
  &:hover{
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
  
  @media screen and (max-width: 500px) {
    transform: scale(0.9, 0.9);
  }
`

export const CardIcon = styled.img`
  height: 125px;
  width: 150px;
  margin-bottom: 15px;
`

export const CardH2 = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`

export const CardP = styled.p`
  font-size: 16px;
  text-align: center;
`
