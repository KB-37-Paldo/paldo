import axios from 'axios';
// import store from '@/stores/index.js';
// import router from '@/routes/index.js';


export function setInterceptors() {
  let instance = axios.create({
    baseURL: process.env.VUE_APP_PORTFOLIO_SERVICE_URL,
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



