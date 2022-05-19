import React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { content } from 'recoil/content';
import { Button } from 'ui/atoms';
import { ResultCard } from 'ui/molecules';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { colorTheme } from '../../recoil/result';

const DetailPage = () => {
  const navigate = useNavigate();
  const color = useRecoilValue(colorTheme);
  const magicContent = useRecoilValue(content);

  const moveToMainPage = () => {
    navigate('/');
  };

  return (
    <Container>
      <Box px={20} py={5}>
        <Button
          text="목록으로 돌아가기"
          full
          onClick={() => {
            moveToMainPage();
          }}
        />
      </Box>
      <ResultCard
        bgColor={color.bgColor}
        mainColor={color.mainColor}
        question={magicContent.question}
        advice={magicContent.advice}
        width="100%"
        height="100%"
        padding="20px"
      />
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  width: 512px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 50px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
  box-sizing: border-box;
`;
