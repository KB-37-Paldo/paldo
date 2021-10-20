<template>
  <div>
    <div>
      <span class="color__gray pointer"
      @click="goBudHome"
      >
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
    <BudgetSettingForm/>
  </div>
</template>

<script>
import BudgetSettingForm from '@/components/budget/BudgetSettingForm.vue';

export default {
  components: {
      BudgetSettingForm
  },
  methods: {
    goBudHome() {
      this.$router.push({
        name:'BudgetPage'
      })
    }
  }
}
</script>

<style>

</style>