import React from 'react';
import styled from '@emotion/styled';
import { MainContent } from 'ui/organisms';

const MainPage = () => {
  return (
    <Container>
      <MainContent />
    </Container>
  );
};

export default MainPage;
const Container = styled.div`
  height: 100vh;
`;
