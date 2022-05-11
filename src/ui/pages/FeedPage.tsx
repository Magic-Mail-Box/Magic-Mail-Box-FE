import React from 'react';
import styled from '@emotion/styled';
import { Header, Footer } from 'ui/molecules';

import { useNavigate } from 'react-router-dom';

const FeedPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      {/* Todo : 카드 컴포넌트 나열 */}
      <Footer />
    </Container>
  );
};

export default FeedPage;
const Container = styled.div`
  background: #f4f4f4;
  text-align: center;
`;
