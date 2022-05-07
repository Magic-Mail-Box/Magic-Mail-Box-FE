import React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import ResultCard from '../ui/ResultCard/ResultCard';
import Pallete from '../ui/Pallete/Pallete';
import { colorTheme } from '../recoil/result';

const ResultPage = () => {
  const color = useRecoilValue(colorTheme);

  return (
    <Container>
      <ResultCard bgColor={color.bgColor} mainColor={color.mainColor} />
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
