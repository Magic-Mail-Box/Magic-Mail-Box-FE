import React from 'react';
import styled from '@emotion/styled';

const Bottom = () => {
  return (
    <Container>
      <div>
        <Logo>A Magic Mailbox</Logo>
        <p>고민 중인 당신을 위한 조언 서비스, A Magic Mailbox</p>
      </div>
      <LinkButtonsGroup>
        <LinkButton>A Magic Mailbox</LinkButton>
        <LinkButton>Feed</LinkButton>
        <LinkButton>What is AMM?</LinkButton>
      </LinkButtonsGroup>
      <div>email 문의 amama@gmail.com</div>
    </Container>
  );
};

const Container = styled.div`
  height: 220px;
  width: 100vw;
  background: black;
  color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  box-sizing: border-box;
  justify-content: space-around;
`;
const Logo = styled.p`
  font-size: 2rem;
  margin: 0 auto;
  text-align: center;
`;

const LinkButtonsGroup = styled.div`
  display: flex;
  font-weight: bold;
`;

const LinkButton = styled.p`
  margin: 0px 40px;
`;
export default Bottom;
