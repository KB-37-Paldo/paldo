import { setInterceptors } from './config/interceptors'
const instance = setInterceptors()

// 예시
function fetchPortfolio() {
  console.log('너는 인스턴스', instance);
  return instance.get(`portfolio-service/test`)
}

export {
  fetchPortfolio
}