/* eslint-disable react/require-default-props */ // TODO : eslint 수정하기
import React from 'react';
import styled from '@emotion/styled';

type StackProps = {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  spacing?: number;
};

type StyleProps = {
  direction?: 'row' | 'column';
  spacing?: number;
};

const Stack = ({ children, direction = 'column', spacing }: StackProps) => {
  return (
    <Container direction={direction} spacing={spacing}>
      {children}
    </Container>
  );
};

const Container = styled.div<StyleProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => props.spacing}px;
`;

export { Stack };
