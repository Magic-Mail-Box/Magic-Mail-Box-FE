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
              onClick={() => {
                moveToWritePage();
              }}
            />
            <Button
              text="마법의 우편함이란?"
              onClick={() => {
                moveToIntroPage();
              }}
            />
            <Button
              text="피드"
              onClick={() => {
                moveToFeedPage();
              }}
            />
          </Stack>
        </Box>
        <MagicBoxWrapperDiv>
          <MagicBoxWrapperImg alt="" src="/image/mainMagicbox.png" />
        </MagicBoxWrapperDiv>
      </MainContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 40px 360px 0px 360px;
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
const MagicBoxWrapperDiv = styled.div``;
const MagicBoxWrapperImg = styled.img`
  width: 85%;
  height: 100%;
`;

export default MainContent;
