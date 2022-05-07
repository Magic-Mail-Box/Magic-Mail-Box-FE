import React from 'react';
import { atom } from 'recoil';

export const colorTheme = atom({
  key: 'colorTheme', // unique ID (with respect to other atoms/selectors)
  default: { type: 'type1', mainColor: '#000000', bgColor: '#FFFFFF' }, // default value (aka initial value)
});
