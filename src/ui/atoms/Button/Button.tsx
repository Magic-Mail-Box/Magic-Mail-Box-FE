/* eslint-disable react/require-default-props */
import React from 'react';
import styled from '@emotion/styled';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  const handleOnClick = () => {
    if (!onClick) {
      return;
    }
    onClick();
  };

  return <Container onClick={handleOnClick}>{text}</Container>;
};

const Container = styled.button`
  border: 1px solid #ff7a00;
  border-radius: 30px;
  padding: 12px 28px;
  width: fit-content;
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
