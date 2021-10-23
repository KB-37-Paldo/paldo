<template>
  <div class="mt__ten">
    <div>
      예산관리페이지
    </div>
    <!-- 예산설정 했을 때 -->
    <template v-if="isBudget">
      <MonthPicker />
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
import MonthPicker from "@/components/budget/MonthPicker.vue";
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
    MonthPicker,
    BudgetTopSection,
    BudgetBottomSection,
    BudgetSideBar,
    BudgetNone,
  },
};
</script>

<style></style>
