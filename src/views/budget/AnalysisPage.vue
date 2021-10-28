<template>
  <div class="pl__ten">
    <div>
      <span class="color__gray pointer" @click="goSpending">
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
    <div >
      <!-- class="mt__ten" -->
      <AnalysisTopSection
        :month="this.$route.params.month"
        :categoryList="this.$route.params.categoryList"
      />
      <AnalysisMainSection
        :month="this.$route.params.month"
        :categoryList="this.$route.params.categoryList"
      />
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
  name: "Params",
};
</script>

<style></style>
