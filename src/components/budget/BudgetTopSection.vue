<template>
  <div>
    <SpendingTopSection />

    <div>
      <span class="sub__font">한 달 예산</span>
    </div>
    <div>
      <span class="main__money__font">390,000원 남음</span>
    </div>
    <div class="budget-setting-button-section">
      <v-btn
        style="background-color: rgb(253,185,19); color: white;"
        elevation="2"
        @click="settingBud"
        >예산 설정</v-btn
      >
    </div>

    <div class="total-budget-chart-section">
      <div class="color__yellow">
        <meter
          class="meter w-100"
          min="0"
          max="1000000"
          :value="610000"
        ></meter>
      </div>
    </div>
    <div class="mini-font-section mini__font">
      <span>총 예산 1,000,000원</span><br />
      <span>남은 예산 390,000원</span>
    </div>
  </div>
</template>

<script>
import SpendingTopSection from "@/components/budget/SpendingTopSection.vue";

export default {
  components: {
    SpendingTopSection,
  },
  methods: {
    settingBud() {
      this.$router.push({
        name: "BudgetSettingPage",
      });
    },
  },
};
</script>

<style></style>
