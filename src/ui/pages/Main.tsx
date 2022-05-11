import React from 'react';
import styled from '@emotion/styled';

import { Footer, Header } from 'ui/molecules';
import { MainContent } from 'ui/organisms';

const MainPage = () => {
  return (
    <Container>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
};

export default MainPage;
const Container = styled.div`
  background: #f4f4f4;
  height: 100vh;
`;
