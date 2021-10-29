<template>
  <div>
    <div>
      <span class="sub__font">한 달 예산</span>
    </div>
    <div>
      <span class="main__money__font"
        >{{
          changeMoney(categoryList.totalAmount - categoryList.totalOutlay)
        }}원 남음</span
      >
    </div>
    <div class="budget-setting-button-section">
      <v-btn
        style="background-color: rgb(253,185,19); color: white;"
        elevation="2"
        @click="settingBud"
        >예산 설정</v-btn
      >
    </div>
    <span
      @click="goBudCreate"
      class="mini__font category-floating-right  pointer color__gray"
      >예산생성</span
    >

    <div class="total-budget-chart-section">
      <div>
        <div class="color__yellow">
          <meter
            class="meter w-100"
            min="0"
            :max="categoryList.totalAmount"
            :value="categoryList.totalOutlay"
          ></meter>
        </div>
      </div>
      <div class="mini-font-section mini__font">
        <span>총 예산 {{ changeMoney(categoryList.totalAmount) }}원</span><br />
        <span
          >남은 예산
          {{
            changeMoney(categoryList.totalAmount - categoryList.totalOutlay)
          }}원</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categoryList"],

  methods: {
    settingBud() {
      this.$router.push({
        name: "BudgetSettingPage",
        params: { categoryList: this.categoryList },
      });
    },
    changeMoney(amount) {
      return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    goBudCreate() {
      this.$router.push({
        name: "BudgetCreatePage",
      });
    },
  },
};
</script>

<style></style>
