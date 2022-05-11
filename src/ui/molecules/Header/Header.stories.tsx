/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import styled from '@emotion/styled';
import { Header } from './Header';

export default {
  title: 'UI/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Header 컴포넌트',
      },
    },
  },
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (args) => {
  return <Header />;
};
export const HeaderMain = Template.bind({});
