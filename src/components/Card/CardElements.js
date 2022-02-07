import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column
    justify-content: center
    align-items: center;
    background: #E2E2E2;
    height: 500px;

    @media screen and (max-width: 864px) {
      height: 800px;
    }
    @media screen and (max-width: 428px) {
      height: 1100px;
    }
`

export const CardWrapper = styled.div`
  display: grid;
  max-width: 1728px;
  padding: 0 50px;
  margin: 0 auto; 
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  
  @media screen and (max-width: 864px) {
    grid-template-columns: 1fr 1fr;
    padding: 50px
  }

  @media screen and (max-width: 428px) {
    grid-template-columns: 1fr;
    padding: 0 25px;
  }
`

export const CardCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  max-height: 400px;
  width: 300px;
  padding: 30px;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2 ease-in-out;
  
  &:hover{
    transform: scale(1.05);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`

export const CardIcon = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 25px;
`
export const CardH1 = styled.h1`
  font-size: 40px;
  color: #000;
  text-align: center
  width: 200px;
  margin: auto;

  @media screen and (max-width: 428px) {
    font-size: 32px;
  }
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

