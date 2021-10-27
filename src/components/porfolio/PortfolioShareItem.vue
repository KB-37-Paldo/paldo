<template>
  <div class="portfolio__share">
    <span class="block mt__five sub__font">
          {{shareTitle}} 포트폴리오 공유
    </span>
    <v-carousel 
    cycle
      height="400"
      hide-delimiter-background
    v-model="model">
    <template v-slot:prev="{ on, attrs }">
        <v-btn
          color="rgba(100, 91, 76,0.5)"
          fab
          v-bind="attrs"
          v-on="on"
        ><i class="fas fa-arrow-left"></i></v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn
          color="rgba(100, 91, 76,0.5)"
          v-bind="attrs"
          v-on="on"
          fab
        ><i class="fas fa-arrow-right"></i></v-btn>
      </template>
      <v-carousel-item
        v-for="(portfolioInfo, i) in portfolioList"
        :key="i"
      >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            
          >
              <PortfolioChart :portType="shareType"
              :portfolioInfo="portfolioInfo"
              />
          </v-row>
      </v-carousel-item>
    </v-carousel>
        
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PortfolioChart from '../../components/porfolio/PortfolioChart.vue'
export default {
  components: { PortfolioChart },
  props:['shareType'],
  data(){
    return {
      shareTitle:'',
      portfolioList:[],
      model: 0,
    
    }
  },
  mounted() {
    this.fetchShareData()
  },
  computed:{
    ...mapState({
      portfolio: state=>state.portfolio.recommendPortfolioInfo,
      agePortfolioList: state=>state.portfolio.agePortfolioList,
      assetPortfolioList: state=>state.portfolio.assetPortfolioList,
      investPortfolioList: state=>state.portfolio.investPortfolioList
    })
  },
  methods: {
    async fetchShareData() {
      if (this.shareType == "age") {
        this.shareTitle = "같은 연령대"
        this.portfolioList = this.agePortfolioList
      } else if (this.shareType == "money") {
        this.shareTitle = "비슷한 연봉"
        this.portfolioList = this.assetPortfolioList
      } else if (this.shareType == "investType") {
        this.shareTitle = `${this.portfolio.investType}`
        this.portfolioList = this.investPortfolioList
      }
    }
  }
}
</script>

<style>

</style>