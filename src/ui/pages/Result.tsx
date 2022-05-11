import React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { Button } from 'ui/atoms';
import { ResultCard, Pallete, ShareBox } from 'ui/molecules';
import { colorTheme } from '../../recoil/result';

const ResultPage = () => {
  const color = useRecoilValue(colorTheme);

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
