/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  text: string;
  full?: boolean;
  onClick?: () => void;
};

type StyleProps = {
  full?: boolean;
};

const Button = ({ text, full, onClick }: ButtonProps) => {
  const handleOnClick = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };

  return (
    <Container onClick={handleOnClick} full={full}>
      {text}
    </Container>
  );
};

const Container = styled.button<StyleProps>`
  border: 1px solid #ff7a00;
  border-radius: 30px;
  padding: 12px 28px;
  width: ${(props) => (props.full ? '100%' : 'fit-content')};
  background-color: transparent;
  cursor: pointer;
  color: #ff7a00;
  text-align: center;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #ff7a00;
    color: white;
  }
`;

export { Button };
