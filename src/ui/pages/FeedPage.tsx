import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ResultCard } from 'ui/molecules';

import { useNavigate } from 'react-router-dom';
import { colorTheme } from 'recoil/result';
import { useRecoilValue } from 'recoil';
import { content } from 'recoil/content';
import http from 'service/http';

type ContentProps = {
  answer: string;
  id: number;
  question: string;
  satisfaction: boolean;
};
const FeedPage = () => {
  const navigate = useNavigate();
  const color = useRecoilValue(colorTheme);
  const magicContent = useRecoilValue(content);
  const [feedContent, setFeedContent] = useState([]);

  const getFeedContents = () => {
    http
      .get('/card/feed')
      .then((res) => {
        setFeedContent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFeedContents();
  }, []);

  const moveToDetailPage = () => {
    // TODO : id
    navigate('/card/1');
  };
  return (
    <Container
      onClick={() => {
        moveToDetailPage();
      }}
    >
      {/* Todo : feedContent map */}
      <ContentWrapper>
        <ResultCardGroupWrapper>
          <ResultCard
            bgColor={color.bgColor}
            mainColor={color.mainColor}
            question={magicContent.question}
            advice={magicContent.advice}
            width="280px"
            height="435px"
            padding="10px"
          />
          <ResultCard
            bgColor={color.bgColor}
            mainColor={color.mainColor}
            question={magicContent.question}
            advice={magicContent.advice}
            width="280px"
            height="435px"
            padding="10px"
          />
          <ResultCard
            bgColor={color.bgColor}
            mainColor={color.mainColor}
            question={magicContent.question}
            advice={magicContent.advice}
            width="280px"
            height="435px"
            padding="10px"
          />
          <ResultCard
            bgColor={color.bgColor}
            mainColor={color.mainColor}
            question={magicContent.question}
            advice={magicContent.advice}
            width="280px"
            height="435px"
            padding="10px"
          />
          <ResultCard
            bgColor={color.bgColor}
            mainColor={color.mainColor}
            question={magicContent.question}
            advice={magicContent.advice}
            width="280px"
            height="435px"
            padding="10px"
          />
          <ResultCard
            bgColor={color.bgColor}
            mainColor={color.mainColor}
            question={magicContent.question}
            advice={magicContent.advice}
            width="280px"
            height="435px"
            padding="10px"
          />
        </ResultCardGroupWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default FeedPage;
const Container = styled.div`
  text-align: center;
`;
const ContentWrapper = styled.div`
  width: 70vw;
  margin: 0 auto;
  padding-top: 30px;
`;
const ResultCardGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
