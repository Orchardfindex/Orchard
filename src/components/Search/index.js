import React from 'react';
import { 
    Container,
    InputWrap,
    Input,
    SearchWrap,
    SearchIcon } from './SearchElements';

const Search = () => {
  return (
    <Container>
        <InputWrap>
            <Input type="text" name="" placeholder="Search by name" />
            <SearchWrap>
              <SearchIcon />
            </SearchWrap>
        </InputWrap>
    </Container>
  )
}

export default Search;