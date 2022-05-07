import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Pattern } from '../../asset/image/pattern.svg';
import CardFrame from '../CardFrame/CardFrame';
import Input from '../Input/input';

type ResultCardProps = {
  bgColor: string;
  mainColor: string;
};

type StyleProps = {
  bgColor?: string;
  mainColor?: string;
};

const ResultCard = ({ bgColor, mainColor }: ResultCardProps) => {
  return (
    <CardFrame bgColor={bgColor} mainColor={mainColor}>
      <>
        <UpperBox>
          <Pattern fill={mainColor} />
          <Input color={mainColor} />
        </UpperBox>
        <AdviceBox mainColor={mainColor}>
          <Advice bgColor={bgColor}>그로 인해 좋은 일이 일어날지도...</Advice>
        </AdviceBox>
      </>
    </CardFrame>
  );
};

const UpperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
`;

const AdviceBox = styled.div<StyleProps>`
  height: 200px;
  width: 100%;
  background-color: ${(props) => props.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Advice = styled.div<StyleProps>`
  color: ${(props) => props.bgColor};
  font-size: 24px;
  font-family: 'universe';
`;

export default ResultCard;
