import React from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';

type StyleProps = {
  isPathSame: boolean;
};
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const moveToIntroMain = () => {
    navigate('/');
  };
  const moveToIntroPage = () => {
    navigate('/intro');
  };
  const moveToFeedPage = () => {
    navigate('/feed');
  };
  return (
    <Container>
      <Wrapper>
        <ContentLeft
          onClick={() => {
            moveToIntroMain();
          }}
        >
          <p>A Magic Mailbox</p>
        </ContentLeft>
        <ContentRight>
          <ContentRightNavIntro
            isPathSame={pathname === '/intro'}
            onClick={() => {
              moveToIntroPage();
            }}
          >
            마법의 우편함이란?
          </ContentRightNavIntro>
          <ContentRightNavFeed
            isPathSame={pathname === '/feed'}
            onClick={() => {
              moveToFeedPage();
            }}
          >
            피드
          </ContentRightNavFeed>
        </ContentRight>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-family: 'universe-b';
  width: 70vw;
  height: 80px;
  margin: 0 auto;
`;

const ContentLeft = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 2rem;
    margin: 0px;
    cursor: pointer;
  }
`;
const ContentRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
`;

const ContentRightNavIntro = styled.p<StyleProps>`
  margin: 0px 10px;
  cursor: pointer;
  color: ${(props) => (props.isPathSame ? '#ff7a00' : 'black')};
`;

const ContentRightNavFeed = styled.p<StyleProps>`
  margin: 0px 10px;
  cursor: pointer;
  color: ${(props) => (props.isPathSame ? '#ff7a00' : 'black')};
`;

export { Header };
