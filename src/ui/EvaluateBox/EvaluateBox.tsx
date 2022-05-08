import React from 'react';
import styled from '@emotion/styled';
import evaluateAdvice from 'utils/evaluateAdvice';
import Button from 'ui/Button/Button';
import { Box } from '@mui/material';

const EvaluateBox = () => {
  const TMP_CARD_ID = 1; // TODO : card id 부분을 받아오게 되면 입력할 내용

  return (
    <Containter>
      <Text>이 대답이 도움이 되었나요?</Text>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button text="네" onClick={() => evaluateAdvice(TMP_CARD_ID, true)} />
        <Button
          text="아니요"
          onClick={() => evaluateAdvice(TMP_CARD_ID, false)}
        />
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
