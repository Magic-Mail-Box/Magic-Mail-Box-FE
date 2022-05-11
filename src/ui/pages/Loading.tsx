import React from 'react';
import styled from '@emotion/styled';
import { Header } from 'ui/molecules';

const LoadingPage = () => {
  return (
    <Container>
      <Header />
      <LoadingImgWrapper>
        <LoadingImg alt="loading" src="/image/loading.png" />
      </LoadingImgWrapper>
    </Container>
  );
};

export default LoadingPage;
const Container = styled.div`
  text-align: center;
  height: 100vh;
`;

const LoadingImgWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoadingImg = styled.img`
  height: 500px;
`;
