<template>
  <div class="portfolio__share">
    <span class="block mt__five sub__font">
          {{age}}대 TOP 포트폴리오
        </span>
        <PortfolioChart :portType="shareType"/>
  </div>
</template>

<script>
import PortfolioChart from '../../components/porfolio/PortfolioChart.vue'

export default {
  components: { PortfolioChart },
  props:['shareType'],
  created() {
    
  }
}
</script>

<style>

</style>