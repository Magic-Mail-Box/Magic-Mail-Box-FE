import React from 'react';
import styled from '@emotion/styled';

type CardProps = {
  bgColor: string;
  mainColor: string;
  children: React.ReactNode;
  width: string;
  height: string;
  padding: string;
};

type StyleProps = {
  bgColor?: string;
  mainColor?: string;
  width?: string;
  height?: string;
  padding?: string;
};

const CardFrame = ({
  bgColor,
  mainColor,
  children,
  width,
  height,
  padding,
}: CardProps) => {
  return (
    <Container
      bgColor={bgColor}
      width={width}
      height={height}
      padding={padding}
    >
      <LineContainer mainColor={mainColor}>{children}</LineContainer>
    </Container>
  );
};

const Container = styled.div<StyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border-radius: 30px;
  background-color: ${(props) => props.bgColor};
  box-sizing: border-box;
`;

const LineContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.mainColor};
  border-radius: 30px;
  // padding-top: 25px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export { CardFrame };
