import React from 'react';
import styled from '@emotion/styled';
import copyUrlHelper from '../../utils/copyUrlHelper';
import CopyIcon from '../../asset/image/copy_icon.png';

const ShareBox = () => {
  return (
    <Containter>
      <Text>공유하기</Text>
      <SnsBox>
        <Image src={CopyIcon} onClick={copyUrlHelper} />
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
  height: 160px;
  flex-direction: column;
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
