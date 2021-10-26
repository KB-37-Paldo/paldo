<template>
  <div class="portfolio__share">
    <span class="block mt__five sub__font">
          {{shareTitle}} 평균 포트폴리오
    </span>
    <v-carousel v-model="model">
      <v-carousel-item
        v-for="(portfolioInfo, i) in portfolioList"
        :key="i"
      >
        <v-sheet
          height="100%"
          tile
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
        </v-sheet>
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
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
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
    fetchShareData() {
      if (this.shareType == "age") {
        this.shareTitle = "같은 연령대"
        this.portfolioList = this.agePortfolioList
      } else if (this.shareType == "money") {
        this.shareTitle = "유사한 자산"
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