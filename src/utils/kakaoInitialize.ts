export default function kakaoInitialize() {
  if (window.Kakao) {
    window.Kakao.init(process.env.KAKAO_KEY);
  }
}
