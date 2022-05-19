import { atom } from 'recoil';

export const isLoading = atom({
  key: 'loading',
  default: {
    isLoading: false,
  },
});
