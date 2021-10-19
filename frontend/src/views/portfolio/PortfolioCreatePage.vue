<template>
  <div>
    <div>
      <span class="color__gray pointer"
      @click="goPortHome"
      >
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
    <div class="mt__ten">
      <span class="block mb__five title__font">
        {{userInfo.userName}}님의
      </span>
      <span class="title__font">
        정보가 정확한가요?
      </span>
    </div>
    <div class="mt__ten mb__five">
      <span class="title__font">나이</span>
      <span class="title__font right">{{userInfo.userAge}}살</span>
    </div>
    <div class="">
      <span class="title__font">월소득</span>
      <span class="title__font right">{{userInfo.userIncome}}원</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo : {
        userName: '전국구',
        userAge: 28,
        userIncome: '3,000,000'
      }
    }
  },
  methods: {
    goPortHome() {
      this.$router.push({
        name:'PortfolioPage'
      })
    }
  }

}
</script>

<style>

</style>