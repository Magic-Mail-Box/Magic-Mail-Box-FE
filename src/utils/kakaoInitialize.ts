export default function kakaoInitialize() {
  if (window.Kakao) {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }
}
