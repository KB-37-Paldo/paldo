<template>
  <div class="about">
    <div class="pb__ten pt__ten">
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
    <img class="mt__ten about__img" :src="imgURL" />
    <div class="bgColor__yellow h-100"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      imgURL:require('../assets/images/KB_Images.png')
    }
  },
  created() {
    sessionStorage.clear()
  },
  computed: {
    ...mapState({
      userInfo:state=>state.portfolio.userInfo
    })
  },
  methods: { 
    goLogin() {
      this.$store.dispatch('LOGIN').then(()=>{
        this.$store.dispatch('fetchUserAssetInfo')
        this.$store.dispatch('fetchProductInfo')
        this.$store.dispatch('fetchRecommendPortfolioInfo').then(()=>{
          this.$store.dispatch('fetchSharePortfolioInfo')
      });
      if (this.userInfo.portfolio) {
        this.$router.push({
        name:'PortfolioRecommendPage'
        })
      } else {
        this.$router.push({
        name:'PortfolioPage'
        })
      }
      })
      
      
      

      
    }
  }

}
</script>

<style>

</style>