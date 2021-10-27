<template>
  <div class="summary-section">
    <div class="sub__font sub-title">요약</div>
    <div class="summary-main">
      <div
        class="summary-element category__font"
        v-for="(week, index) in weekList"
        :key="index"
      >
        <span
          >{{ week.week }}
          <span class="summary-date"
            >({{ week.startDate }} - {{ week.endDate }})</span
          >
        </span>
        <span class="category-floating-right">
          {{ week.spending }}
        </span>
      </div>
      <div class="sum-spending category__font">
        <span class="summary-date">총 지출</span>
        <span class="category-floating-right">615,000원 </span>
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
export default {
  props: ["categoryList"],
  data() {
    return {
      weekList: [
        {
          week: "11월 1주",
          startDate: "10.31",
          endDate: "10.31",
          spending: "12,000원",
        },
        {
          week: "10월 4주",
          startDate: "10.24",
          endDate: "10.30",
          spending: "1,000원",
        },
        {
          week: "10월 3주",
          startDate: "10.17",
          endDate: "10.23",
          spending: "12,400원",
        },
        {
          week: "10월 2주",
          startDate: "10.10",
          endDate: "10.16",
          spending: "8,000원",
        },
      ],
    };
  },
  components: { SpendingChart },
};
</script>

<style></style>
