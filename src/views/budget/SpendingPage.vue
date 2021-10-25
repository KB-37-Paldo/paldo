<template>
  <div class="mt__ten pl__ten">
    <!-- <div>
      지출관리페이지
    </div> -->
    <MonthPicker />
    <SpendingTopSection style="max-height: 50px" />
    <SpendingBottomSection />
    <template>
      <BudgetSideBar />
    </template>
  </div>
</template>

<script>
import BudgetSideBar from "@/components/budget/BudgetSideBar.vue";
import MonthPicker from "@/components/budget/MonthPicker.vue";
import SpendingTopSection from "@/components/budget/SpendingTopSection.vue";
import SpendingBottomSection from "@/components/budget/SpendingBottomSection.vue";
export default {
  components: {
    BudgetSideBar,
    MonthPicker,
    SpendingTopSection,
    SpendingBottomSection,
  },
};
</script>

<style></style>
