/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import styled from '@emotion/styled';
import CardFrame from './CardFrame';

export default {
  title: 'UI/CardFrame',
  component: CardFrame,
  parameters: {
    docs: {
      description: {
        component: 'CardFrame 컴포넌트',
      },
    },
  },
  argTypes: {
    text: {
      description: '텍스트',
      control: { type: 'text' },
    },
    onClick: {
      description: '클릭액션',
      control: { type: 'action' },
    },
  },
} as ComponentMeta<typeof CardFrame>;
const Template: ComponentStory<typeof CardFrame> = (args) => {
  return (
    <Container>
      <CardFrame {...args} />
    </Container>
  );
};
export const DefaultButton = Template.bind({});

const Container = styled.div`
  width: 500px;
`;
