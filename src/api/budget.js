import { setInterceptors } from "./config/interceptors";
const instance = setInterceptors();

// 지출내역 조회
function fetchSpending(spendingData) {
  //return instance.get(`budget-service/expense/${spendingData.userId}`);
  return instance.get(
    `http://paldo.169.56.174.130.nip.io/budget-service/expense/${spendingData.userId}`,
    {
      params: {
        requestDate: spendingData.requestDate,
      },
    }
  );
}

// 내역 추가
function createSpending(addSpendingInfo) {
  return instance.post(
    `http://paldo.169.56.174.130.nip.io/budget-service/expense/${addSpendingInfo.userId}`,
    addSpendingInfo
  );
}

// // 지출 분석
// function fetchSpendingAnalysis(userId) {
//   return instance.get(``);
// }

// // 총 예산, 남은 예산 조회
// function fetchBudget(userId) {
//   return instance.get(``);
// }

// // 모든 카테고리 예산 조회
// function fetchAllCategory(userId) {
//   return instance.get(``);
// }

// 카테고리별 지출내역
function fetchCategorySpending(categoryInfo) {
  return instance.get(
    `http://paldo.169.56.174.130.nip.io/budget-service/expense/${categoryInfo.userId}/category`,
    {
      params: {
        category: categoryInfo.category,
        requestDate: categoryInfo.requestDate,
      },
    }
  );
}

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
  createSpending,
  fetchCategorySpending,
  //   fetchBudget,
  //   fetchAllCategory,
  //   updateBudget,
};
