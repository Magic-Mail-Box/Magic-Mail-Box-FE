import React from 'react';
import styled from '@emotion/styled';

type CardProps = {
  bgColor: string;
  mainColor: string;
  children: React.ReactChild;
};

type StyleProps = {
  bgColor?: string;
  mainColor?: string;
};

const CardFrame = ({ bgColor, mainColor, children }: CardProps) => {
  return (
    <Container bgColor={bgColor}>
      <LineContainer mainColor={mainColor}>{children}</LineContainer>
    </Container>
  );
};

const Container = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 30px;
  background-color: ${(props) => props.bgColor};
  box-sizing: border-box;
`;

const LineContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.mainColor};
  border-radius: 30px;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export { CardFrame };
