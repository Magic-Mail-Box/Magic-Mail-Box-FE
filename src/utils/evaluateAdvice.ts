import instance from '../instance';

const evaluateAdvice = (cardId: number, isHelpful: boolean) => {
  instance.patch('card/evaluate', {
    cardId,
    satisfaction: isHelpful,
  });
};

export default evaluateAdvice;
