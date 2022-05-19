import http from './http';

export const createCard = (question) => {
  return (dispatch) => {
    http
      .post('/card/make', {
        question,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
