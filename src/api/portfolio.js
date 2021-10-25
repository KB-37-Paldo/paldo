import { setInterceptors } from './config/interceptors'
const instance = setInterceptors()

// 유저 상세 정보 조회
// function fetchUserInfo(userId) {
//   return instance.get(`portfolio-service/user/${userId}`)
// }
function fetchUserInfo() {
  return instance.get(`http://paldo.169.56.174.130.nip.io:80/portfolio-service/user/1`)
}


// 포트폴리오 조회
// function fetchPortfolio(userId) {
//   return instance.get(`portfolio-service/portfolio/${userId}`)
// }
function fetchPortfolio(userId) {
  return instance.get(`http://paldo.169.56.174.130.nip.io:80/portfolio-service/portfolio/${userId}`)
}

// 포트폴리오 수정
// function updatePortfolio(portFolioInfo) {
//   return instance.put(`portfolio-service/portfolio/${portFolioInfo.userId}`,portFolioInfo)
// }
function updatePortfolio(portFolioInfo) {
  return instance.put(`http://paldo.169.56.174.130.nip.io:80/portfolio-service/portfolio/${portFolioInfo.userId}`,portFolioInfo)
}
// 포트폴리오 생성
// function createPortfolio(portFolioInfo) {
//   return instance.post(`portfolio-service/portfolio/${portFolioInfo.userId}`,portFolioInfo)
// }
function createPortfolio(portFolioInfo) {
  return instance.post(`http://paldo.169.56.174.130.nip.io:80/portfolio-service/portfolio/${portFolioInfo.userId}`,portFolioInfo)
}

// 포트폴리오 삭제
// function deletePortfolio(userId) {
//   return instance.delete(`portfolio-service/portfolio/${userId}`)
// }
function deletePortfolio(userId) {
  return instance.delete(`http://paldo.169.56.174.130.nip.io:80/portfolio-service/portfolio/${userId}`)
}

export {
  fetchUserInfo,
  fetchPortfolio,
  updatePortfolio,
  createPortfolio,
  deletePortfolio
}