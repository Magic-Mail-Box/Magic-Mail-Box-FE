import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API, // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
});

export default instance;
