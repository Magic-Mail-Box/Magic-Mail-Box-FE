import React from 'react';
import styled from '@emotion/styled';
import copyUrlHelper from 'utils/copyUrlHelper';
import shareWithKakao from 'utils/shareWithKakao';
import CopyIcon from 'asset/image/copy_icon.png';

const ShareBox = () => {
  return (
    <Containter>
      <Text>공유하기</Text>
      <SnsBox>
        <Image
          src={CopyIcon}
          onClick={() => shareWithKakao('점심 뭐먹지', '이 또한 지나가리라')}
        />
      </SnsBox>
    </Containter>
  );
};

const Containter = styled.div`
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 160px;
`;

const Text = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
`;

const SnsBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Image = styled.img``;

export default ShareBox;
