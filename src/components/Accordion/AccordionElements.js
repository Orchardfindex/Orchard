import styled from 'styled-components';
import { h2, h3, p, Button2 } from '../../globalStyles';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { BsArrowUpRightSquare } from 'react-icons/bs';

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 185vh;
  background: #fff;
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1728px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: #191970;
  border-radius: 0.625rem;
  color: #fff;
  width: 90vw;
  height: 10vh;
  margin: auto; 
  margin-bottom: 0.625rem; //gap bet each wrap
  cursor: pointer;
  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; //equal spacing between elements
  align-items: center;
  background: #d3d3d3;
  border: 1px solid #dfdfdf;
  border-radius: 0.625rem;
  color: #dfdfdf;
  width: 90vw;
  height: auto;
  margin: auto;
  position: relative; //No gap bet accordion & dropdown
  top: -10px;
`;

export const InputWrap = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.625rem;
  padding: 0.625rem 0;
  position: relative;
  top: -0.3125rem;
  transition: all 0.2s ease-in-out;
`

export const InputWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.625rem;
  position: relative;
  top: -0.3125rem;
  transition: all 0.2s ease-in-out;
`

export const Input = styled.input` //Input Field
  display: flex;
  justify-content: center;
  background-color: #dfdfdf;
  border: 1.5px solid #808080;
  border-radius: 0.625rem;
  box-sizing: border-box; //equal size box
  color: #000;
  font-size: 1rem;
  padding: 0.875rem;
  width: 25vw;

  &:active {
    border: 1.5px solid #0467FB;
  }

  &:focus{
    border: 1.5px solid #0467FB;
    outline: none; //remove default blue border
  }
  
  &::placeholder {
    color: grey;
    opacity: 0.6;
    font-size: 1rem;
  }
`

export const AccButton = styled.button` //Stake Button
  display: flex;
  justify-content: center;
  background: #0467FB;
  border-radius: 0.625rem;
  border: none;
  box-sizing: border-box;
  color: #fff;
  font-size: 1rem;
  padding: 0.875rem;
  width: 25vw; 
  cursor: pointer;
  transition: all 0.3s ease-out;
`

export const AccH2 = styled(h2)`
  font-size: 1.25rem;
  padding-left: 1.25rem;
  ${h2};
`

export const AccP = styled(p)`
  font-size: 1.1rem;
  ${p};
`

export const ArrowDown = styled(RiArrowDownSFill)`
  font-size: 20px;
  color: #fff;
`

export const ArrowUp = styled(RiArrowUpSFill)`
  font-size: 20px;
  color: #fff;
`

// START OF CARD CONTAINER
export const AccContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #0467FB; 
  border-radius: 0.625rem;
  color: #fff;
  width: 25vw; //Equal to Input & AccButton Width
  height: 16vh;

  @media screen and (max-width: 1024px) {
    height: 15vh;
  }
  @media screen and (max-width: 428px) {
    width: 35vw;
    height: 14vh;
  }
`

export const CardWrap = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start;
  padding: 0.5rem 1.25rem;
  top: 0.625rem;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1024px) {
    padding: 0.4rem 0.625rem;
    top: 1.25rem;
  }
`

export const CardWrap2 = styled.div` //default - flex-direction row
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  top: 3rem;
  width: 90%;
  padding: 0.625rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`

export const CardButton = styled(Button2)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  transform: translate(180%, -100%);
  ${Button2};

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    transform: translate(130%, -100%);
  }

  @media screen and (max-width: 428px) {
    font-size: 0.75rem;
    transform: translate(50%, -100%);
  }
`

export const CardH2 = styled(h2)`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  ${h2};

  @media screen and (max-width: 428px) {
    font-size: 1rem;
  }
`
export const CardH3 = styled(h3)`
  color: #dfdfdf;
  font-weight: 500;
  margin: 0;
  padding-top: 0.25rem;
  ${h3};

  @media screen and (max-width: 428px) {
    font-size: 1rem;
  }
`

export const CardP = styled(p)`
  color: #dfdfdf;
  margin: 0;
  ${p};

  @media screen and (max-width: 428px) {
    font-size: 0.75rem;
  }
`

export const ArrowUpRight = styled(BsArrowUpRightSquare)`
  font-size: 1.25rem;
  color: #dfdfdf;

  @media screen and (max-width: 428px) {
    font-size: 0.75rem;
  }
`