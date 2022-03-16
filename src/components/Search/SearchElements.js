import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1728px;
`;

export const InputWrap = styled.div` //flex-direction: row
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem;
`

export const Input = styled.input`
  display: flex;
  justify-content: center;
  background-color: #dfdfdf;
  border: 2px solid transparent;
  border-radius: 0.625rem;
  box-sizing: border-box; 
  color: #000;
  font-size: 1rem;
  padding: 0.875rem;
  width: 17.5vw; 
  height: 5vh;
  
  &:active{
    background: linear-gradient(#dfdfdf, #dfdfdf) padding-box, linear-gradient(90deg, #27b0e6, #ff3838) border-box;
  }

  &:focus{
    outline: none; //remove default blue border
  }

  &::placeholder {
    color: grey;
    opacity: 0.6;
    font-size: 1rem;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`
export const SearchWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transform: translate(-2.5rem, 0);
  cursor: pointer;
`
export const SearchIcon = styled(BiSearch)`
  font-size: 1.5rem;
`