<template>
  <div>
    <div>
      <span class="color__gray pointer" @click="goSpending">
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
    <div class="mt__ten"></div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    goSpending() {
      this.$router.push({ name: "SpendingPage" });
    },
  },
};
</script>

<style></style>
