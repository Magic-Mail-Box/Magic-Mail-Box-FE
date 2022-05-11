import React from 'react';
import styled from '@emotion/styled';

type InputProps = {
  color: string;
};

const Input = ({ color }: InputProps) => {
  return <InputBox color={color} />;
};

export default Input;

const InputBox = styled.input`
  margin: 25px;
  width: 70%;
  height: 25px;
  border: 1px dotted ${(props) => props.color};
  color: ${(props) => props.color};
  border-style: none none dotted none;
  outline: none;
  text-align: center;
  font-size: 16px;
  background-color: transparent;
`;

export { Input };