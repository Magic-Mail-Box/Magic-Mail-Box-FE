import React from 'react';
import styled from '@emotion/styled';
import Header from 'ui/Common/Header';
import Bottom from 'ui/Common/Bottom';
import MainContent from 'ui/Main/MainContent';

const MainPage = () => {
  return (
    <Container>
      <Header />
      <MainContent />
      <Bottom />
    </Container>
  );
};

export default MainPage;
const Container = styled.div`
  background: #f4f4f4;
  height: 100vh;
`;
