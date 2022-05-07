/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import styled from '@emotion/styled';
import ShareBox from './ShareBox';

export default {
  title: 'UI/ShareBox',
  component: ShareBox,
  parameters: {
    docs: {
      description: {
        component: 'ShareBox 컴포넌트',
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof ShareBox>;
const Template: ComponentStory<typeof ShareBox> = () => {
  return (
    <Container>
      <ShareBox />
    </Container>
  );
};
export const DefaultButton = Template.bind({});

const Container = styled.div`
  width: 512px;
`;
