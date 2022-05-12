import React from 'react';
import styled from '@emotion/styled';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

import copyUrlHelper from 'utils/copyUrlHelper';
import shareWithKakao from 'utils/shareWithKakao';

const ShareBox = () => {
  const currentUrl = window.location.href;

  return (
    <Containter>
      <Text>공유하기</Text>
      <SnsBox>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round borderRadius={24} />
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={48} round borderRadius={24} />
        </TwitterShareButton>
        <Image
          src="/image/icon_kakaotalk.png"
          onClick={() => shareWithKakao('점심 뭐먹지', '이 또한 지나가리라')}
        />
        <Image src="/image/copy_icon.png" onClick={copyUrlHelper} />
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

const Image = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export { ShareBox };
