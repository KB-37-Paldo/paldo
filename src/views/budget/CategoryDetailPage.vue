<template>
  <div class="pl__ten">
    <div>
      <span class="color__gray pointer" @click="goBudHome">
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
    <CategoryDetailItem />
  </div>
</template>

<script>
import CategoryDetailItem from "@/components/budget/CategoryDetailItem.vue";
export default {
  components: { CategoryDetailItem },
  methods: {
    goBudHome() {
      this.$router.push({
        name: "BudgetPage",
      });
    },
  },
};
</script>

<style></style>
