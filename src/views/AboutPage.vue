<template>
  <div class="about">
    <div class="pb__ten">
      종합자산관리
    </div>
    <div class="pb__fifty">머니마니 서비스</div>
    <div @click="goLogin">
      <v-btn
      elevation="2"
      x-large
      class="button__about"
    >시작하기</v-btn>
    </div>
    <img class="mt__twenty about__img" :src="imgURL" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgURL:require('../assets/images/KB_Images.png')
    }
  },
  created() {
    sessionStorage.clear()
  },
  methods: { 
    goLogin() {
      this.$store.dispatch('LOGIN').then(()=>{
        this.$store.dispatch('fetchUserAssetInfo')
        this.$store.dispatch('fetchRecommendPortfolioInfo').then(()=>{
          this.$store.dispatch('fetchSharePortfolioInfo')
      });
      })

      this.$router.push({
        name:'PortfolioPage'
        })
      

      
    }
  }

}
</script>

<style>

</style>