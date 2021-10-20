<template>
  <div class="mt__ten">
    <div>
      예산관리페이지
    </div>
    <BudgetMonthPicker />
    <BudgetTopSection />
    <BudgetBottomSection />
    <BudgetSideBar />
  </div>
</template>

<script>
import BudgetMonthPicker from "@/components/budget/BudgetMonthPicker.vue";
import BudgetTopSection from "@/components/budget/BudgetTopSection.vue";
import BudgetBottomSection from "@/components/budget/BudgetBottomSection.vue";
import BudgetSideBar from "@/components/budget/BudgetSideBar.vue";
export default {
  components: {
    BudgetMonthPicker,
    BudgetTopSection,
    BudgetBottomSection,
    BudgetSideBar,
  },
};
</script>

<style></style>
