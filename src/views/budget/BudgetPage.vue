<template>
  <div class="mt__ten">
    <div>
      예산관리페이지
    </div>
    <!-- 예산설정 했을 때 -->
    <template v-if="isBudget">
      <BudgetMonthPicker />
      <BudgetTopSection />
      <BudgetBottomSection />
      <BudgetSideBar />
    </template>
    <!-- 예산설정 안했을 때 -->
    <template v-else>
      <BudgetNone />
    </template>
  </div>
</template>

<script>
import BudgetMonthPicker from "@/components/budget/BudgetMonthPicker.vue";
import BudgetTopSection from "@/components/budget/BudgetTopSection.vue";
import BudgetBottomSection from "@/components/budget/BudgetBottomSection.vue";
import BudgetSideBar from "@/components/budget/BudgetSideBar.vue";
import BudgetNone from "@/components/budget/BudgetNone.vue";
export default {
  data() {
    return {
      isBudget: true,
    };
  },
  components: {
    BudgetMonthPicker,
    BudgetTopSection,
    BudgetBottomSection,
    BudgetSideBar,
    BudgetNone,
  },
};
</script>

<style></style>
