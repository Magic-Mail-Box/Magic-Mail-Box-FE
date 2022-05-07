import React from 'react';
import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';

const MainContent = () => {
  return (
    <Container>
      <LogoWrapperDiv>
        <img alt="" src="/image/mainlogo.png" />
      </LogoWrapperDiv>
      <MainContentWrapper>
        <Box>
          <Box mb={4}>
            <p>고민이 있으신가요?</p>
            <p>마법의 우편함에 조언을 얻어보세요!</p>
          </Box>

          <Stack spacing={2}>
            <MainButton>시작하기</MainButton>
            <SubButton>마법의 우편함이란?</SubButton>
            <SubButton>피드</SubButton>
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
  padding: 40px 360px 250px 360px;
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
const MagicBoxWrapperDiv = styled.div`
  position: absolute;
  right: 360px;
  bottom: 200px;
  width: 700px;
`;
const MagicBoxWrapperImg = styled.img`
  width: 100%;
`;

export const MainButton = styled.button`
  background: #ff7a00;
  border-radius: 30px;
  border: none;
  color: #f4f4f4;
  width: 200px;
  height: 48px;
  cursor: pointer;
`;
const SubButton = styled.button`
  border: 1px solid #ff7a00;
  border-radius: 30px;
  background: #f4f4f4;
  color: #ff7a00;
  width: 200px;
  height: 48px;
  cursor: pointer;
`;
export default MainContent;
