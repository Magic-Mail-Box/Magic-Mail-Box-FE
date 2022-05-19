import React from 'react';
import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from 'ui/atoms';

const MainContent = () => {
  const navigate = useNavigate();

  const moveToWritePage = () => {
    navigate('/write');
  };
  const moveToIntroPage = () => {
    navigate('/intro');
  };
  const moveToFeedPage = () => {
    navigate('/feed');
  };

  return (
    <Container>
      <LogoWrapperDiv>
        <img alt="" src="/image/mainlogo.png" />
      </LogoWrapperDiv>
      <MainContentWrapper>
        <Box>
          <Box my={6}>
            <p>
              고민이 있으신가요? <br />
              마법의 우편함에 조언을 얻어보세요!
            </p>
          </Box>

          <Stack spacing={2}>
            <Button
              text="시작하기"
              full
              onClick={() => {
                moveToWritePage();
              }}
            />
            <Button
              text="마법의 우편함이란?"
              full
              onClick={() => {
                moveToIntroPage();
              }}
            />
            <Button
              text="피드"
              full
              onClick={() => {
                moveToFeedPage();
              }}
            />
          </Stack>
        </Box>

        <MagicBoxWrapperImg alt="" src="/image/mainMagicbox.png" />
      </MainContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 30px;
  width: 70vw;
  height: 80vh;
  margin: 0 auto;
  position: relative;
`;

const LogoWrapperDiv = styled.div`
  width: 400px;
  img {
    width: 100%;
  }
`;
const MainContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const MagicBoxWrapperImg = styled.img`
  width: 45vw;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export { MainContent };
