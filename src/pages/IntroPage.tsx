import React from 'react';
import styled from '@emotion/styled';
import Header from 'ui/Common/Header';
import Bottom from 'ui/Common/Bottom';
import MainContent, { MainButton } from 'ui/Main/MainContent';
import { Box, Typography } from '@mui/material';

const IntroPage = () => {
  return (
    <Container>
      <Header />
      <Box sx={{ padding: '40px 360px' }}>
        <Box my={8}>
          <IntroTitleTypo>마법의 우편함이란?</IntroTitleTypo>
          <div>
            마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의
            우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란?
            마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의
            우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란?
            마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의
            우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란?
            마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의
            우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란?
            마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의
            우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란?
            마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의
            우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란?
            마법의 우편함이란? 마법의 우편함이란? 마법의 우편함이란? 마법의
            우편함이란? 마법의 우편함이란? 마법의 우편함이란?
          </div>
        </Box>
        <Box my={16}>
          <IntroTitleTypo>How to use</IntroTitleTypo>
          <Box>
            <IntroImgs alt="" src="/image/introCards.png" />
          </Box>
          <Box my={16}>
            <MainButton>시작하기</MainButton>
          </Box>
        </Box>
      </Box>
      <Bottom />
    </Container>
  );
};

export default IntroPage;
const Container = styled.div`
  background: #f4f4f4;
  text-align: center;
`;

const IntroImgs = styled.img`
  width: 100%;
`;

const IntroTitleTypo = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;