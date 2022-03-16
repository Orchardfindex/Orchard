import styled from 'styled-components';
import { Button2 } from '../../globalStyles';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff; 
  height: 250px;

  @media screen and (max-width: 1024px) {
    height: 500px;
  }
`

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #191970; 
  max-width: 1728px;
  margin: 0 auto; 
  border-radius: 15px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`

export const RowCard = styled.div`//CardContainer
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 15px;
  height: 170px;
  width: 600px;
  padding: 25px;
  transition: all 0.2 ease-in-out;

  @media screen and (max-width: 1024px) {
    width: 375px;
  }
`

export const RowWrap = styled.div`//CardContainer
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  background: #0046ff;
  border-radius: 15px;
  height: 130px;
  width: 350px;
  margin: auto;
  padding: 20px;
  position: relative;
  transform: translate(-25px);
  transition: all 0.2 ease-in-out;

  @media screen and (max-width: 1024px) {
    transform: translate(0px, -25px);
    width: 325px;
  }
`
export const RowBtnWrapper = styled.div`
  display: flex;
  position: relative;
  transform: translate(225px, -60px);
  align-items: center;

  @media screen and (max-width: 1024px) {
    transform: translate(160px, -60px);
  }
`
export const RowButton = styled(Button2)`
  ${Button2};
`

export const RowH2 = styled.h2`
  font-size: 24px;
  color: #fff;
  text-align: left;
  margin-bottom: 0.625rem;
  line-height: 1.2em;
`

export const RowP = styled.p`
  font-size: 18px;
  color: #d3d3d3;
  text-align: left;
  margin-bottom: 0.3rem;
  line-height: 1em;
`