<template>
  <div class="mt__ten">
    <div>
    지출관리페이지
    </div>
    <BudgetMonthPicker/>
    <BudgetTopSection/>
    <BudgetBottomSection/>
  </div>
</template>

<script>
import BudgetMonthPicker from '@/components/budget/BudgetMonthPicker.vue'
import BudgetTopSection from '@/components/budget/BudgetTopSection';
import BudgetBottomSection from '@/components/budget/BudgetBottomSection';
export default {
 components : {
    BudgetMonthPicker,
    BudgetTopSection,
    BudgetBottomSection,
 }

}
</script>

<style>

</style>