/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import styled from '@emotion/styled';
import EvaluateBox from './EvaluateBox';

export default {
  title: 'UI/EvaluateBox',
  component: EvaluateBox,
  parameters: {
    docs: {
      description: {
        component: 'EvaluateBox 컴포넌트',
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof EvaluateBox>;
const Template: ComponentStory<typeof EvaluateBox> = () => {
  return (
    <Container>
      <EvaluateBox />
    </Container>
  );
};
export const DefaultButton = Template.bind({});

const Container = styled.div`
  width: 512px;
`;
