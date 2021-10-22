import { setInterceptors } from './config/interceptors'
const instance = setInterceptors()

// 예시
function fetchPortfolio() {
  return instance.get(`portfolio-service/test`)
}

export {
  fetchPortfolio
}