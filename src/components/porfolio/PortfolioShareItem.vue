<template>
  <div class="portfolio__share">
    <span class="block mt__five sub__font">
          {{shareTitle}} TOP 포트폴리오
        </span>
        <PortfolioChart :portType="shareType"/>
  </div>
</template>

<script>
import PortfolioChart from '../../components/porfolio/PortfolioChart.vue'

export default {
  components: { PortfolioChart },
  props:['shareType'],
  data(){
    return {
      shareTitle:''
    }
  },
  mounted() {
    this.fetchShareData()
  },
  methods: {
    fetchShareData() {
      if (this.shareType == "age") {
        this.shareTitle = "20대"
      } else if (this.shareType == "money") {
        this.shareTitle = "같은 소득"
      } else if (this.shareType == "investType") {
        this.shareTitle = "투자유형"
      }
    }
  }
}
</script>

<style>

</style>