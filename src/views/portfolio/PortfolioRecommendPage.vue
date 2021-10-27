<template>
  <div class="bgColor__lightgray mt__minusTen">
    <div class="portfolio__div ">
      <div class="mt__ten title__font">
        <span>
          {{userInfo.name}}님을 위한
        </span>
        <span class="block mt__five">
          추천 자산 포트폴리오
        </span>
        
        <PortfolioChart
        :portfolioInfo="portfolioInfo"
         portType="recommend"/>
        
        
        <div class="position__r  h__two mt__five mini__font" v-if="portfolioInfo.description">
          <div class="recommend__div position__a w-50 z">
            {{portfolioInfo.description}}
          </div>
          
          <img class="position__a about__img" :src="imgURL"/>
        </div>
      </div>
      
    </div>
    <RecommendPage/>
    <PortfolioSideBar/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PortfolioChart from '../../components/porfolio/PortfolioChart.vue'
import PortfolioSideBar from '../../components/porfolio/PortfolioSideBar.vue'
import RecommendPage from './RecommendPage.vue'
export default {
  components: { PortfolioChart, PortfolioSideBar, RecommendPage },
  data() {
    return {
      imgURL:require('../../assets/images/bb.png'),
      productTypeList: ["cash","bond","fund","realAssets","realEstate","stock"],
    }
  },
  
  computed: {
    ...mapState({
      portfolioInfo: state => state.portfolio.recommendPortfolioInfo,
      userInfo :state => state.portfolio.userInfo
    })
  },

}
</script>

<style>

</style>