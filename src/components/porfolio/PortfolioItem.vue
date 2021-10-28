<template>
  <div class="portfolio__div">
    <div class="title__font">
      <!-- mt__ten  -->
      <span>
        전국구님의
      </span>
      <span class="block">
        현재 자산 포트폴리오
      </span>
      <PortfolioChart portType="users" :portfolioInfo="portfolioInfo"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PortfolioChart from './PortfolioChart.vue'
export default {
  components: { PortfolioChart },
  created() {
    // this.$store.dispatch('fetchRecommendPortfolioInfo')
  },
  
  computed: {
    ...mapState({
      portfolioInfo:state=>state.portfolio.userAssetList
    })
  }

}
</script>

<style>

</style>