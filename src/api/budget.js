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

// 모든 카테고리 예산 조회
function fetchAllCategory(allCategoryInfo) {
  return instance.get(
    `http://paldo.169.56.174.130.nip.io/budget-service/${allCategoryInfo.userId}/budget`,
    {
      params: {
        requestDate: allCategoryInfo.requestDate,
      },
    }
  );
}

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

// 주별 지출내역
function fetchWeekSpending(monthData) {
  return instance.get(`budget-service/expense/${monthData.userId}/week`, {
    params: {
      requestDate: monthData.requestDate,
    },
  });
}

// 예산생성 조회
function fetchCreateData(userId) {
  return instance.get(`budget-service/recommend/budget/${userId}`);
}

// 예산생성
function createBudget(createInfo) {
  console.log(createInfo);
  return instance.post(
    `budget-service/${createInfo.userId}/budget`,
    createInfo
  );
}

// 예산설정
function updateBudget(updateInfo) {
  return instance.put(
    `/budget-service/${updateInfo.userId}/budget`,
    updateInfo
  );
}

export {
  fetchSpending,
  createSpending,
  fetchCategorySpending,
  fetchWeekSpending,
  createBudget,
  fetchAllCategory,
  fetchCreateData,
  updateBudget,
};
