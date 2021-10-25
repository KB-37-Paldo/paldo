import { setInterceptors } from './config/interceptors'
const instance = setInterceptors()

// 유저 상세 정보 조회
function fetchUserInfo(userId) {
  return instance.get(`portfolio-service/user/${userId}`)
}

// 포트폴리오 조회
function fetchPortfolio(userId) {
  return instance.get(`portfolio-service/portfolio/${userId}`)
}

// 포트폴리오 수정
function updatePortfolio(portFolioInfo) {
  return instance.put(`portfolio-service/portfolio/${portFolioInfo.userId}`,portFolioInfo)
}

// 포트폴리오 생성
function createPortfolio(portFolioInfo) {
  return instance.post(`portfolio-service/portfolio/${portFolioInfo.userId}`,portFolioInfo)
}

// 포트폴리오 삭제
function deletePortfolio(userId) {
  return instance.delete(`portfolio-service/portfolio/${userId}`)
}

export {
  fetchUserInfo,
  fetchPortfolio,
  updatePortfolio,
  createPortfolio,
  deletePortfolio
}