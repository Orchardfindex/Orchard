import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress color="secondary" size="5rem"/>
    </LoaderContainer>

   )
}

export default Loader