<template>
  <div class="category-section">
    <div class="sub__font category-start-section">
      <span>카테고리별 예산</span>
    </div>
    <div
      class="category__font category"
      v-for="(category, index) in categoryList"
      :key="index"
    >
      <span class="category-icon-section" v-html="category.icon"></span>
      <span>{{ category.category }}</span>
      <div class="color__yellow">
        <meter
          class="meter w-100"
          min="0"
          :max="category.settingValue"
          :value="category.currentValue"
        ></meter>
      </div>
      <div class="category-budget">
        <span class="micro__font">예산 {{ category.budget }}만원</span>
      </div>
      <div class="category-floating-right">
        <span class="micro__font">남은 예산 {{ category.leftBudget }}만원</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [
        {
          icon: '<i class="fas fa-utensils"></i>',
          category: "식비",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-shopping-bag"></i>',
          category: "쇼핑",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-coffee"></i>',
          category: "카페",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-bus"></i>',
          category: "교통",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-chess-pawn"></i>',
          category: "문화",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-envelope"></i>',
          category: "경조",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-won-sign"></i>',
          category: "금융",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-shopping-basket"></i>',
          category: "생활",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-book"></i>',
          category: "교육",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
        {
          icon: '<i class="fas fa-hospital"></i>',
          category: "의료",
          settingValue: "1000000",
          currentValue: "610000",
          budget: "500,000",
          leftBudget: "200,000",
        },
      ],
    };
  },
};
</script>

<style></style>
