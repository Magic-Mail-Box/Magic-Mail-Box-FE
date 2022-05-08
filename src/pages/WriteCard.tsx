import React from 'react';
import styled from '@emotion/styled';
import Header from 'ui/Common/Header';
import { Box } from '@mui/material';
import BlinkIcon from 'ui/Common/BlinkIcon';
import Input from 'ui/Input/input';

const WriteCard = () => {
  return (
    <Container>
      <Header />
      <ContentBody>
        <CardWrapperBackground>
          <CardWrapperBorder>
            {/* Todo : Box 삭제 , img삽입 */}

            <Box my={16} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '130px', height: '130px', background: 'pink' }}>
                <img src="" alt="" />
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
              <Input color="black" />
              <CardSubmitBtn>카드 보내기</CardSubmitBtn>
            </WriteContentBox>
          </CardWrapperBorder>
        </CardWrapperBackground>
      </ContentBody>
    </Container>
  );
};

export default WriteCard;
const Container = styled.div`
  background: #f4f4f4;
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
  border-radius: 20px;h
`;
const CardWrapperBorder = styled.div`
  border: 1px solid black;
  margin: 20px;
  box-sizing: border-box;
  width: initial;
  height: fill-available;
  border-radius: 20px;
`;
const WriteContentBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
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

const CardSubmitBtn = styled.div`
  border: 1px solid #ff7a00;
  border-radius: 30px;
  background: #f4f4f4;
  color: #ff7a00;
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
