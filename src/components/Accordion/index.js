import React, { useState } from 'react';
import { Data } from './Data';
import { 
  AccordionSection,
  Container,
  Wrap,
  InputWrap,
  InputWrap2,
  ArrowUp,
  ArrowDown,
  Dropdown, 
  AccH2, 
  AccP, 
  Input,
  AccButton,
  AccContainer, 
  CardWrap, 
  CardWrap2,
  CardWrap3,
  CardH2, 
  CardH3,
  CardP, 
  CardButton,
  ArrowUpRight } from './AccordionElements';

const Accordion = () => {
  const [click, setClick] = useState(false);
  
  const toggle = index => { //open/close accordion
    if (click === index) { 
      return setClick(null);
    }
    setClick(index);
  };
  
  return (
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <AccH2>{item.name}</AccH2>
                  <AccP>{item.earn}</AccP>
                  <AccP>{item.liquidity}</AccP>
                  <AccP>{item.apr}</AccP>
                  <span>{click === index ? <ArrowUp /> : <ArrowDown />}</span> 
                </Wrap>
                {click === index ? (
                  <Dropdown>
                    <InputWrap>
                      <label htmlFor=""></label>
                      <Input type="text" name="" placeholder="0.0" />
                      <AccButton to="about">Stake</AccButton>
                    </InputWrap>

                    <InputWrap2>
                      <label htmlFor=""></label>
                      <Input type="text" name="" placeholder="0.0" />
                      <AccButton to="about">Unstake</AccButton>
                    </InputWrap2>
                    
                    <AccContainer>
                      <CardWrap>
                        <CardH2>Sprout Earned</CardH2>
                        <CardH3>0</CardH3>
                        <CardH3>~0</CardH3>
                        <CardButton to="harvest">Harvest</CardButton>
                      </CardWrap>

                      <CardWrap2>
                          <ArrowUpRight /><CardP>View Contract</CardP>
                        {Data.filter(item => item.id<=1).map(item => {
                          return (
                            <>
                            <ArrowUpRight />
                            <CardP key={item.id}>Get {item.name}</CardP>
                            </>
                          );
                        })}
                      </CardWrap2>
                    </AccContainer>
                  </Dropdown>
                ) : null}
            </>
            );
          })}
        </Container>
      </AccordionSection>
  );
};

export default Accordion;