const copyUrlHelper = () => {
  const el = document.createElement('input');
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  // 알람 추가해주기
};

export default copyUrlHelper;
