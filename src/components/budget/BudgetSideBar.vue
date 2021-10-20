<template>
  <div class="mt__ten center pointer budget__sidebar">
    <div class="budget__sidebar__div">
      <div
        class="mr__ten budget__sidebar__item"
        @click="goSpending"
        :class="[toActive === 'SpendingPage' ? 'active' : '']"
      >
        지출관리
      </div>
      <div
        class="budget__sidebar__item"
        @click="goBudget"
        :class="[toActive === 'BudgetPage' ? 'active' : '']"
      >
        예산관리
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromActive: "",
      toActive: "",
    };
  },
  watch: {
    $route(to, from) {
      this.fromActive = from.name;
      this.toActive = to.name;
      console.log(this.fromActive, this.toActive);
      console.log(this.toActive);
    },
  },
  methods: {
    goSpending() {
      this.$router.push({
        name: "SpendingPage",
      });
    },
    goBudget() {
      this.$router.push({
        name: "BudgetPage",
      });
    },
  },
};
</script>

<style></style>
