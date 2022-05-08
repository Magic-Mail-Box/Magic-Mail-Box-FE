import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import ShareBox from '../ui/ShareBox/ShareBox';
import ResultCard from '../ui/ResultCard/ResultCard';
import Button from '../ui/Button/Button';
import Pallete from '../ui/Pallete/Pallete';
import { colorTheme } from '../recoil/result';
import kakaoInitialize from '../utils/kakaoInitialize';

const ResultPage = () => {
  const color = useRecoilValue(colorTheme);

  useEffect(() => {
    kakaoInitialize();
  }, []);

  return (
    <Container>
      <ResultCard bgColor={color.bgColor} mainColor={color.mainColor} />
      <Pallete />
      <ButtonBox>
        <Button text="다시 보내기" />
        <Button text="이미지 저장하기" />
      </ButtonBox>
      <ShareBox />
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  width: 512px;
  margin: 0 auto;
  position: relative;
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
