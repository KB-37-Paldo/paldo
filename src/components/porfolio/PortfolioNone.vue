<template>
  <div class="portfolio__div">
    <div class="mt__ten">
      <span class="block mb__five title__font">
        전국구님,
      </span>
      <span class="block mb__five title__font">
        포트폴리오가 없습니다.
      </span>
      <span class="title__font">
        생성하시겠습니까?
      </span>
    </div>
    <div class="mt__twenty  mb__five">
      <span class="mb__five title__font">
        네, 만들래요!
      </span>
      <span class="color__yellow right pointer" @click="createPort">
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
    createPort() {
      this.$router.push({ name: "PortfolioCreatePage" });
    },
  },
};
</script>

<style scoped></style>
