import axios from 'axios';
// import store from '@/stores/index.js';
// import router from '@/routes/index.js';


export function setInterceptors() {
  let instance = axios.create({
    // baseURL: '우리 URL',
  });
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error.response)
  );
  instance.interceptors.response.use(
    (config) => {
      // console.log('response Config',config)
      return config;
    },
    (error) => Promise.reject(error.response)
  );
  return instance;
}



