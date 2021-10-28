<template>
  <div class="summary-section">
    <div class="sub__font sub-title">요약</div>
    <div class="summary-main">
      <div
        class="summary-element category__font"
        v-for="(week, index) in weekList"
        :key="index"
      >
        <span>{{ week.week }}주차 </span>
        <span class="category-floating-right">
          {{ changeMoney(week.totalAmount) }}원
        </span>
      </div>
      <div class="sum-spending category__font">
        <span class="summary-date">총 지출</span>
        <span class="category-floating-right"
          >{{ changeMoney(categoryList.totalOutlay) }}원
        </span>
      </div>
    </div>

    <div class="stats-main">
      <div class="sub__font sub-title">통계</div>
      <SpendingChart spendingType="users" :categoryList="categoryList" />
    </div>
  </div>
</template>

<script>
import SpendingChart from "@/components/budget/SpendingChart.vue";
import { fetchWeekSpending } from "@/api/budget";
export default {
  props: ["month", "categoryList"],
  created() {
    this.monthData.requestDate = this.month;
    this.getWeekSpending();
  },
  methods: {
    async getWeekSpending() {
      const spending = await fetchWeekSpending(this.monthData).then((res) => {
        this.weekList = res.data;
      });
      console.log(spending);
    },
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  components: { SpendingChart },
  data() {
    return {
      monthData: {
        userId: 1,
        requestDate: "",
      },
      weekList: [],
    };
  },
};
</script>

<style></style>
