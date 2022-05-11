const shareWithKakao = (question: string, advise: string) => {
  window.Kakao.Link.sendDefault({
    objectType: 'feed', // 메시지 형식 : 피드 타입
    content: {
      title: question,
      description: advise,
      imageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/bookdiver.net/KakaoTalk_Photo_2022-05-11-13-49-05.png', // 메인으로 보여질 이미지 주소
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
