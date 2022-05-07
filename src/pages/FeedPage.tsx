import React from 'react';
import styled from '@emotion/styled';
import Header from 'ui/Common/Header';
import Bottom from 'ui/Common/Bottom';

import { useNavigate } from 'react-router-dom';

const FeedPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      {/* Todo : 카드 컴포넌트 나열 */}
      <Bottom />
    </Container>
  );
};

export default FeedPage;
const Container = styled.div`
  background: #f4f4f4;
  text-align: center;
`;
