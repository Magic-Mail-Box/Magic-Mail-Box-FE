import React from 'react';
import styled from '@emotion/styled';
import { CardFrame, Input } from 'ui/atoms';
import { ReactComponent as Pattern } from 'asset/image/pattern.svg';

type ResultCardProps = {
  bgColor: string;
  mainColor: string;
  question: string;
  advice: string;
};

type StyleProps = {
  bgColor?: string;
  mainColor?: string;
};

const ResultCard = ({
  bgColor,
  mainColor,
  question,
  advice,
}: ResultCardProps) => {
  return (
    <CardFrame bgColor={bgColor} mainColor={mainColor}>
      <>
        <UpperBox>
          <Pattern fill={mainColor} />
          <Input color={mainColor} defaultValue={question} />
        </UpperBox>
        <AdviceBox mainColor={mainColor}>
          <Advice bgColor={bgColor}>{advice}</Advice>
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

export { ResultCard };
