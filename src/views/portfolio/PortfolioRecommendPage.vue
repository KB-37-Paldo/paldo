<template>
  <div class="bgColor__lightgray mt__minusTen">
    <div class="portfolio__div ">
      <div class="mt__ten title__font">
        <span>
          전국구님을 위한
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
    <div class="title__font portfolio__div">
      <span>
        추천 금융상품
      </span>
    </div>
    <div class="bgColor__lightgray mt__minusTen">
      <div v-for="(product,index) in productTypeList" :key="index">
        <PortfolioFinanceRecommend :productInfo="recommendList[product]" 
        :productType="product"/>
      </div>
    </div>
    <PortfolioSideBar/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PortfolioChart from '../../components/porfolio/PortfolioChart.vue'
import PortfolioFinanceRecommend from '../../components/porfolio/PortfolioFinanceRecommend.vue'
import PortfolioSideBar from '../../components/porfolio/PortfolioSideBar.vue'
export default {
  components: { PortfolioChart, PortfolioSideBar, PortfolioFinanceRecommend },
  data() {
    return {
      imgURL:require('../../assets/images/bb.png'),
      productTypeList: ["cards","insurances"],
      recommendList: {
        cards: [{
          product_id: 1,
          product_name: "KB카드",
          product_description: "KB카드 혜택 빵빵 좋아여",
          amount: 10000
        }],
        insurances: [{
          product_id: 1,
          product_name: "KB보험",
          product_description: "KB보험 혜택 빵빵 좋아여",
          amount: 10000
        }], 

      }
    }
  },
  created() {
    
  },
  computed: {
    ...mapState({
      portfolioInfo: state => state.portfolio.recommendPortfolioInfo
    })
  },

}
</script>

<style>

</style>