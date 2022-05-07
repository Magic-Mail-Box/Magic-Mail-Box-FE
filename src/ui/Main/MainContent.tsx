import React from 'react';
import styled from '@emotion/styled';
import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
            <MainButton
              onClick={() => {
                moveToWritePage();
              }}
            >
              시작하기
            </MainButton>
            <SubButton
              onClick={() => {
                moveToIntroPage();
              }}
            >
              마법의 우편함이란?
            </SubButton>
            <SubButton
              onClick={() => {
                moveToFeedPage();
              }}
            >
              피드
            </SubButton>
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
  padding: 40px 360px 220px 360px;
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

// Todo : 공통 버튼 컴포넌트 만들기
export const MainButton = styled.button`
  background: #ff7a00;
  border-radius: 30px;
  border: none;
  color: #f4f4f4;
  width: 200px;
  height: 48px;
  cursor: pointer;
`;
// Todo : 공통 버튼 컴포넌트 만들기
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
