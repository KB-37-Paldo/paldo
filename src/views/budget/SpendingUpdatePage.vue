<template>
  <div class="pl__ten">
    <div>
      <span class="color__gray pointer" @click="goSpending">
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
    <div class="mt__ten">
      <div>
        내역 추가
      </div>
      <SpendingUpdateForm />
    </div>
  </div>
</template>

<script>
import SpendingUpdateForm from "@/components/budget/SpendingUpdateForm.vue";
export default {
  components: {
    SpendingUpdateForm,
  },
  methods: {
    goSpending() {
      this.$router.push({ name: "SpendingPage" });
    },
  },
};
</script>

<style></style>
