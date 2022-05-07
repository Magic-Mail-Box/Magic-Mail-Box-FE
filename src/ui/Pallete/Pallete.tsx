import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { palletes } from './palletes';
import { colorTheme } from '../../recoil/result';
import Circle from './Circle';
import ReversedCircle from './ReverseCircle';

const Pallete = () => {
  const [isReversed, setIsReversed] = useState(false);
  const setColor = useSetRecoilState(colorTheme);
  const pallete = isReversed ? palletes.reversed : palletes.normal;

  return (
    <Container>
      <ReversedCircle onClick={() => setIsReversed(!isReversed)} />
      {pallete.map((data) => {
        return (
          <Circle
            key={data.type}
            mainColor={data.mainColor}
            bgColor={data.bgColor}
            onClick={() => setColor(data)}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: -130px;
  top: 0px;
  align-items: center;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 40px;
  gap: 20px;
  width: fit-content;
`;

export default Pallete;
