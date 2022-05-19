import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Box, Input } from '@mui/material';
import { BlinkIcon } from 'ui/atoms';
import http from 'service/http';
import { useNavigate } from 'react-router-dom';

type StyleProps = {
  isContentExist: boolean;
};
const WriteCard = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const onSubmitQuestion = (question: string) => {
    if (question.length > 0) {
      http
        .post('/card/make', {
          question,
        })
        .then((res) => {
          navigate('/loading');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container>
      <ContentBody>
        <CardWrapperBackground>
          <CardWrapperBorder>
            <Box my={10} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '180px', height: '180px' }}>
                <MainPatternImg src="/image/core.png" alt="" />
              </Box>
            </Box>

            <WriteContentBox>
              <WriteCardTitle>
                <BlinkIcon />
                <p>무엇을 고민하고 계세요?</p>
                <BlinkIcon />
              </WriteCardTitle>
              <Box mb={5}>
                고민하고있는 일이 있으신가요?
                <br />이 엽서에 살짝 적어서 마법의 우편함에 넣어보세요. <br />
                당신이 한걸음 더 나아갈 수 있는 멋진 답장이 돌아올지도 몰라요!
              </Box>
              <Input
                inputProps={{ maxLength: 30 }}
                fullWidth
                onChange={(e) => setContent(e.target.value)}
                value={content}
              />
              <CardSubmitBtn
                isContentExist={content.length > 0}
                onClick={() => onSubmitQuestion(content)}
              >
                카드 보내기
              </CardSubmitBtn>
            </WriteContentBox>
          </CardWrapperBorder>
        </CardWrapperBackground>
      </ContentBody>
    </Container>
  );
};

export default WriteCard;
const Container = styled.div`
  text-align: center;
`;

const ContentBody = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 60px;
`;

const CardWrapperBackground = styled.div`
  background: white;
  width: 560px;
  height: 840px;
  border-radius: 20px;
`;

const CardWrapperBorder = styled.div`
  border: 1px solid black;
  margin: 20px;
  box-sizing: border-box;
  width: initial;
  height: fill-available;
  border-radius: 20px;
`;

const MainPatternImg = styled.img`
  width: 100%;
`;
const WriteContentBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0px 60px;
`;

const WriteCardTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px;

  p {
    font-size: 1.2rem;
    font-family: 'universe-b';
    margin: 10px;
  }
`;

const CardSubmitBtn = styled.div<StyleProps>`
  border: 1px solid ${(props) => (props.isContentExist ? '#ff7a00' : '#bababa')};
  border-radius: 30px;
  color: ${(props) => (props.isContentExist ? '#ff7a00' : '#bababa')};
  width: 150px;
  height: 48px;
  cursor: pointer;
  margin-top: 50px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'universe-b';
`;
