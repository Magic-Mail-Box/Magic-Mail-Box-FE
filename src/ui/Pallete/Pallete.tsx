import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { palletes } from './palletes';
import { colorTheme } from '../../recoil/result';
import Circle from './Circle';
import ReversedCircle from './ReverseCircle';

const Pallete = () => {
  const [isReversed, setIsReversed] = useState(false);
  const [color, setColor] = useRecoilState(colorTheme);
  const pallete = isReversed ? palletes.reversed : palletes.normal;

  const makeReversed = () => {
    setIsReversed(!isReversed);
    setColor({
      type: color.type,
      mainColor: color.bgColor,
      bgColor: color.mainColor,
    });
  };

  return (
    <Container>
      <ReversedCircle onClick={makeReversed} />
      {pallete.map((data) => {
        return (
          <Circle
            key={data.type}
            mainColor={data.mainColor}
            bgColor={data.bgColor}
            onClick={() => setColor(data)}
            active={data.type === color.type}
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
  padding: 10px;
  border-radius: 40px;
  gap: 20px;
  width: fit-content;
`;

export default Pallete;
