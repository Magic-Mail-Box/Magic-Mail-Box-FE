import kakaoInitialize from 'utils/kakaoInitialize';

const shareWithKakao = (question: string, advise: string) => {
  kakaoInitialize();

  window.Kakao.Link.sendDefault({
    objectType: 'feed', // 메시지 형식 : 피드 타입
    content: {
      title: question,
      description: advise,
      imageUrl: 'https://picsum.photos/200/300', // 메인으로 보여질 이미지 주소
      link: {
        webUrl: 'https://www.naver.com/',
        mobileWebUrl: 'https://www.naver.com/',
      },
    },
    buttons: [
      {
        title: '나도 조언받기',
        link: {
          webUrl: 'https://www.naver.com/',
          mobileWebUrl: 'https://www.naver.com/',
        },
      },
    ],
  });
};

export default shareWithKakao;
