import React from 'react';
import styled from '@emotion/styled';
import Header from 'ui/Common/Header';
import Bottom from 'ui/Common/Bottom';
import { Button } from 'ui/atoms';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const navigate = useNavigate();
  const moveToWritePage = () => {
    navigate('/write');
  };

  return (
    <Container>
      <Header />
      <Box sx={{ padding: '40px 360px' }}>
        <Box my={8}>
          <IntroTitleTypo>마법의 우편함이란?</IntroTitleTypo>
          <IntroDescTypo>
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
          </IntroDescTypo>
        </Box>
        <Box my={16}>
          <IntroTitleTypo>How to use</IntroTitleTypo>
          <Box>
            <IntroImgs alt="" src="/image/introCards.png" />
          </Box>
          <Box my={16}>
            <Button
              text="시작하기"
              onClick={() => {
                moveToWritePage();
              }}
            />
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
  font-family: 'universe-b';
`;

const IntroDescTypo = styled.div`
  text-align: start;
`;
