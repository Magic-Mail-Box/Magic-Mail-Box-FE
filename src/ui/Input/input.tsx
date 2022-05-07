import React from 'react';
import styled from '@emotion/styled';

const Input = () => {
  return <InputBox />;
};

export default Input;

const InputBox = styled.input`
  margin: 25px;
  width: 70%;
  height: 25px;
  border-style: none none dotted none;
  outline: none;
  text-align: center;
  font-size: 16px;
`;
