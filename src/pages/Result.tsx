import React from 'react';
import styled from '@emotion/styled';
import ResultCard from '../ui/ResultCard/ResultCard';
import Pallete from '../ui/Pallete/Pallete';

const ResultPage = () => {
  return (
    <Container>
      <ResultCard bgColor="white" mainColor="black" />
      <Pallete />
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  width: 512px;
  margin: 0 auto;
  position: relative;
`;
