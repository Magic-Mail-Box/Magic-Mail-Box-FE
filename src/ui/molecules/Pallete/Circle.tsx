import React from 'react';
import styled from '@emotion/styled';

type CircleProps = {
  bgColor: string;
  mainColor: string;
  active: boolean;
  onClick: () => void;
};

type StyleProps = {
  bgColor: string;
  active: boolean;
};

const Circle = ({ bgColor, mainColor, active, onClick }: CircleProps) => {
  return (
    <Container bgColor={bgColor} onClick={onClick} active={active}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <g id="레이어_2" data-name="레이어 2">
          <g id="레이어_1-2" data-name="레이어 1">
            <path
              fill={mainColor}
              d="M20,40c-.64-8.75-1.36-13.3-4-16S8.75,20.64,0,20c8.75-.64,13.3-1.36,16-4s3.39-7.22,4-16c.64,8.75,1.36,13.3,4,16s7.22,3.39,16,4c-8.75.64-13.3,1.36-16,4S20.64,31.25,20,40Z"
            />
          </g>
        </g>
      </svg>
    </Container>
  );
};

const Container = styled.div<StyleProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  box-sizing: content-box;
  ${(props) =>
    props.active &&
    `
  border: 5px solid #bababa;
  `}

  cursor: pointer;
`;

export default Circle;