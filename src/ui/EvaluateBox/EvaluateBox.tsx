import React from 'react';
import styled from '@emotion/styled';
import Button from 'ui/Button/Button';
import { Box } from '@mui/material';

const EvaluateBox = () => {
  return (
    <Containter>
      <Text>이 대답이 도움이 되었나요?</Text>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button text="네" />
        <Button text="아니요" />
      </Box>
    </Containter>
  );
};

const Containter = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 160px;
`;

const Text = styled.p``;

export default EvaluateBox;
