import styled from 'styled-components';
import { h2, p } from '../../globalStyles'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFF;
  height: 31.25rem;

  @media screen and (max-width: 1024px) {
    height: 43.75rem;
    margin-top: 1.875rem;
  }
  
  @media screen and (max-width: 500px) {
    height: 68.75rem;
    margin-top: 1.875rem;
  }
`

export const CardWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1.875rem; //horizontal space bet cards
  max-width: 1728px;
  margin: 0 auto; 
  
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 1.875rem; //vertical space bet cards
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 0; //space bet cards
    padding-top: 9.375rem;
  }
`

export const CardCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #FFF;
  border: 1.5px solid #E2E2E2;
  border-radius: 15px;
  width: 20rem;
  height: 20rem;
  padding: 1.25rem; //space between card and elements
  transition: all 0.2 ease-in-out;
  
  &:hover{
    background: #FFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
  
  @media screen and (max-width: 1024px) {
    transform: scale(0.9, 0.9);
  }
`

export const CardIcon = styled.img`
  display: block; //remove white space under image
  width: 30%;
  height: auto;
  margin-bottom: 0.625rem;
`

export const CardH2 = styled(h2)`
  margin-bottom: 0.625rem;
  text-align: center;
  ${h2};
`

export const CardP = styled(p)`
  font-size: 1.25rem;
  text-align: center;
`
