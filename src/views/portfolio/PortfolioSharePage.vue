<template>
  <div class="bgColor__lightgray">
    <div class="portfolio__div">
      <div class="mt__ten title__font">
        <span>
          포트폴리오 공유
        </span>
        
        <span class="block mt__five sub__font">
          {{age}}대 TOP 포트폴리오
        </span>
        <PortfolioChart portType="recommend"/>
      </div>
    </div>
    <PortfolioSideBar/>
  </div>
</template>

<script>
import PortfolioChart from '../../components/porfolio/PortfolioChart.vue'
import PortfolioSideBar from '../../components/porfolio/PortfolioSideBar.vue'
export default {
  components: { PortfolioSideBar, PortfolioChart },
  data() {
    return {
      age:20
    }
  },

}
</script>

<style>

</style>