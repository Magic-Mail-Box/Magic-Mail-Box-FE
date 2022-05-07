import React from 'react';
import styled from '@emotion/styled';
import Header from 'ui/Common/Header';
import Bottom from 'ui/Common/Bottom';
import { MainButton } from 'ui/Main/MainContent';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();
  const moveToWritePage = () => {
    navigate('/write');
  };

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
  background: #f4f4f4;
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
