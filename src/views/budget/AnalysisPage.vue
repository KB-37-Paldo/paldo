<template>
  <div>
    <div>
      <span class="color__gray pointer" @click="goSpending">
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
    <div class="mt__ten">
      <AnalysisTopSection />
      <AnalysisMainSection />
    </div>
  </div>
</template>

<script>
import AnalysisTopSection from "@/components/budget/AnalysisTopSection.vue";
import AnalysisMainSection from "@/components/budget/AnalysisMainSection.vue";
export default {
  components: {
    AnalysisTopSection,
    AnalysisMainSection,
  },
  methods: {
    goSpending() {
      this.$router.push({ name: "SpendingPage" });
    },
  },
};
</script>

<style></style>
