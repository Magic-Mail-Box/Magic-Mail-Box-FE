import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  const moveToResultPage = () => {
    navigate('/result');
  };

  useEffect(() => {
    setTimeout(function () {
      moveToResultPage();
    }, 2000);
  }, []);

  return (
    <Container
      onClick={() => {
        moveToResultPage();
      }}
    >
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
