/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import styled from '@emotion/styled';
import { ResultCard } from './ResultCard';

export default {
  title: 'UI/ResultCard',
  component: ResultCard,
  parameters: {
    docs: {
      description: {
        component: 'ResultCard 컴포넌트',
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof ResultCard>;
const Template: ComponentStory<typeof ResultCard> = (args) => {
  return (
    <Container>
      <ResultCard {...args} />
    </Container>
  );
};
export const DefaultButton = Template.bind({});

const Container = styled.div`
  width: 500px;
`;
