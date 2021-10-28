<template>
  <div>
    <div class="main__money__font">{{ category }}</div>
    <div class="main__money__font category-floating-right">
      총 {{ changeMoney(totalAmount) }}원
    </div>

    <br />
    <hr />
    <!-- 월 지출 내역 -->
    <div
      class="daily-spending-section"
      v-for="(spend, index) in spendingList"
      :key="index"
    >
      <div
        class="category__font category-icon-section"
        v-if="spend.category === '식비'"
      >
        <i class="fas fa-utensils"></i>
      </div>
      <div
        class="category__font category-icon-section"
        v-if="spend.category === '쇼핑'"
      >
        <i class="fas fa-shopping-bag"></i>
      </div>
      <div
        class="category__font category-icon-section"
        v-if="spend.category === '카페'"
      >
        <i class="fas fa-coffee"></i>
      </div>
      <div
        class="category__font category-icon-section"
        v-if="spend.category === '교통'"
      >
        <i class="fas fa-bus"></i>
      </div>
      <div
        class="category__font category-icon-section"
        v-if="spend.category === '문화'"
      >
        <i class="fas fa-chess-pawn"></i>
      </div>
      <div
        class="category__font category-icon-section"
        v-if="spend.category === '경조'"
      >
        <i class="fas fa-envelope"></i>
      </div>
      <div
        class="category__font category-icon-section"
        v-if="spend.category === '생활'"
      >
        <i class="fas fa-shopping-basket"></i>
      </div>
      <div
        class="category__font category-icon-section"
        v-if="spend.category === '교육'"
      >
        <i class="fas fa-book"></i>
      </div>
      <div
        class="category__font category-icon-section"
        v-if="spend.category === '의료'"
      >
        <i class="fas fa-hospital"></i>
      </div>

      <div class="category-budget">
        <span class="mini__font">{{ spend.source }}</span>
      </div>
      <div class="category-floating-right">
        <span class="mini__font">{{ changeMoney(spend.amount) }}원</span>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchCategorySpending } from "@/api/budget";
export default {
  props: ["category", "month"],

  created() {
    this.categoryInfo.requestDate = this.month;
    this.getSpending();
  },
  methods: {
    async getSpending() {
      const spending = await fetchCategorySpending(this.categoryInfo).then(
        (res) => {
          this.spendingList = res.data.expenseResponses;
          this.totalAmount = res.data.totalAmount;
        }
      );
      console.log(spending);
    },
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  data() {
    return {
      categoryInfo: {
        userId: 1,
        category: this.category,
        requestDate: "",
      },
      spendingList: [],
      totalAmount: "",
    };
  },
};
</script>

<style></style>
