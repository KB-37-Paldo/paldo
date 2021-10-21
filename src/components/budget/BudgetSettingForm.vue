<template>
  <div class="mt__ten">
    <div class="sub__font">10월 예산</div>
    <div class="main__money__font">
      <span>1,000,000원</span>
      <i class="fas fa-edit edit-icon"></i>
    </div>
    <div>
      <div class="category-budget">
        <span class="mini__font">최근 3개월 평균 지출</span>
      </div>
      <div class="category-floating-right">
        <span class="mini__font">200,000만원</span>
      </div>
    </div>
    <div>
      <div class="category-budget">
        <span class="mini__font">지난달 지출</span>
      </div>
      <div class="category-floating-right">
        <span class="mini__font">300,000만원</span>
      </div>
    </div>
    <hr style="margin-top: 14px" />
    <div class="setting-section">
      <div>
        <div class="category-budget">
          <span class="mini__font">카테고리별 예산</span>
        </div>
        <div class="category-floating-right">
          <span class="mini__font">500,000원 남음</span>
        </div>
      </div>
      <span class="category-floating-right micro__font"
        >전체 예산 1,000,000원</span
      >
      <div
        class="main-setting"
        v-for="(category, index) in categoryList"
        :key="index"
      >
        <div class="category__font category">
          <span class="category-icon-section" v-html="category.icon"> </span>
          <span>{{ category.category }}</span>
          <div class="category-floating-right">
            <v-text-field class="setting-text-area" label="금액"></v-text-field>
          </div>
          <div>
            <div class="category-budget">
              <span class="micro__font"
                >지난달 {{ category.lastMonthSpending }}만원</span
              >
            </div>
          </div>
        </div>
      </div>
      <v-btn
        class="setting-button"
        style="background-color: rgb(253,185,19); color: white"
        elevation="2"
        >설 정</v-btn
      >
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
          lastMonthSpending: "500,000",
        },
        {
          icon: '<i class="fas fa-shopping-bag"></i>',
          category: "쇼핑",
          lastMonthSpending: "500,000",
        },
        {
          icon: '<i class="fas fa-coffee"></i>',
          category: "카페",
          lastMonthSpending: "500,000",
        },
        {
          icon: '<i class="fas fa-bus"></i>',
          category: "교통",
          lastMonthSpending: "500,000",
        },
        {
          icon: '<i class="fas fa-chess-pawn"></i>',
          category: "문화",
          lastMonthSpending: "400,000",
        },
        {
          icon: '<i class="fas fa-envelope"></i>',
          category: "경조",
          lastMonthSpending: "500,000",
        },
        {
          icon: '<i class="fas fa-won-sign"></i>',
          category: "금융",
          lastMonthSpending: "500,000",
        },
        {
          icon: '<i class="fas fa-shopping-basket"></i>',
          category: "생활",
          lastMonthSpending: "500,000",
        },
        {
          icon: '<i class="fas fa-book"></i>',
          category: "교육",
          lastMonthSpending: "500,000",
        },
        {
          icon: '<i class="fas fa-hospital"></i>',
          category: "의료",
          lastMonthSpending: "500,000",
        },
      ],
    };
  },
};
</script>

<style></style>
