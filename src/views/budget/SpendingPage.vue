<template>
  <div class="mt__ten">
    <div>
      지출관리페이지
    </div>
    <BudgetMonthPicker />
    <BudgetTopSection />
    <SpendingBottomSection />
    <BudgetSideBar />
  </div>
</template>

<script>
import BudgetSideBar from "@/components/budget/BudgetSideBar.vue";
import BudgetMonthPicker from "@/components/budget/BudgetMonthPicker.vue";
import BudgetTopSection from "@/components/budget/BudgetTopSection.vue";
import SpendingBottomSection from "@/components/budget/SpendingBottomSection.vue";
export default {
  components: {
    BudgetSideBar,
    BudgetMonthPicker,
    BudgetTopSection,
    SpendingBottomSection,
  },
};
</script>

<style></style>
