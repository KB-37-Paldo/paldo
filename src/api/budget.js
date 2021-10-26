import { setInterceptors } from "./config/interceptors";
const instance = setInterceptors();

// 지출내역 조회
function fetchSpending() {
  //return instance.get(`budget-service/expense/${userId}`);
  return instance.get(
    `http://paldo.169.56.174.130.nip.io/budget-service/expense/1`
  );
}

// // 지출 분석
// function fetchSpendingAnalysis(userId) {
//   return instance.get(``);
// }

// // 내역 추가
// function createSpending(spendingInfo) {
//   return instance.post(``);
// }

// // 총 예산, 남은 예산 조회
// function fetchBudget(userId) {
//   return instance.get(``);
// }

// // 카테고리별 예산 조회
// function fetchAllCategory(userId) {
//   return instance.get(``);
// }

// // 최근 3개월 평균 지출, 지난달 지출 금액 조회
// function fetchLastSpanding(userId){
//     return instance.get(``;)
// }

// // 예산설정
// function updateBudget(categoryInfo) {
//   return instance.put(``);
// }

export {
  fetchSpending,
  //   fetchSpendingAnalysis,
  //   createSpending,
  //   fetchBudget,
  //   fetchAllCategory,
  //   updateBudget,
};
