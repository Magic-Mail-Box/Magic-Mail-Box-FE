import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const moveToIntroPage = () => {
    navigate('/intro');
  };
  return (
    <Container>
      <ContentLeft>
        <p>A Magic Mailbox</p>
      </ContentLeft>
      <ContentRight>
        <ContentRightNav
          onClick={() => {
            moveToIntroPage();
          }}
        >
          마법의 우편함이란?
        </ContentRightNav>
        <ContentRightNav>피드</ContentRightNav>
      </ContentRight>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 10px 360px;
  font-weight: bold;
`;

const ContentLeft = styled.div`
  p {
    font-size: 2rem;
    margin: 0px;
  }
`;
const ContentRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const ContentRightNav = styled.p`
  margin: 0px;
`;

export default Header;