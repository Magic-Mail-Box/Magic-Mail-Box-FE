import React from 'react';
import { atom } from 'recoil';

// NOTE : 너무 제네럴한 이름이라 고민이네요.. 더 좋은 이름이 있다면,, 제안 부탁드립니다!

export const content = atom({
  key: 'content', // unique ID (with respect to other atoms/selectors)
  default: {
    question: '저녁은 무엇을 먹을까요?',
    advice: '이 또한 지나가리라',
  }, // default value (aka initial value)
});
