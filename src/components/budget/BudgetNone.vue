<template>
  <div>
    <div class="mt__ten">
      <span class="block mb__five title__font">
        설정 예산이 없습니다.
      </span>
      <span class="title__font">
        설정하시겠습니까?
      </span>
    </div>
    <div class="mt__ten mb__five">
      <span class=" mb__five title__font">
        네, 설정할게요!
      </span>
      <span class="color__yellow right pointer" @click="settingBud">
        <i class="fas fa-arrow-alt-circle-right"></i>
      </span>
    </div>
    <div>
      <span class="title__font">
        다음에 하겠습니다.
      </span>
      <span class="color__gray right pointer">
        <i class="fas fa-times-circle"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    settingBud() {
      this.$router.push({ name: "BudgetSettingPage" });
    },
  },
};
</script>

<style scoped></style>
