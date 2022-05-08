import React from 'react';
import styled from '@emotion/styled';

const BlinkIcon = () => {
  return (
    <Container>
      <img src="/image/blink.png" alt="" />
    </Container>
  );
};

export default BlinkIcon;
const Container = styled.div`
  height: 30px;
  width: 30px;
  img {
    object-fit: contain;
  }
`;
