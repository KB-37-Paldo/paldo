import axios from 'axios';
// import store from '@/stores/modules/portfolio.js';
// import router from '@/routes/index.js';


export function setInterceptors() {
  let instance = axios.create({
    // baseURL: ,
  });
  instance.interceptors.request.use(
    (config) => {
      // store.commit('startSpinner');
      return config;
    },
    (error) => Promise.reject(error.response)
  );
  instance.interceptors.response.use(
    (config) => {
      // console.log('response Config',config)
      // store.commit('endSpinner');
      return config;
    },
    (error) => Promise.reject(error.response)
  );
  return instance;
}



