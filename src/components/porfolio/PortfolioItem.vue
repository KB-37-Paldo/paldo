<template>
  <div>
    <div class="mt__ten title__font">
      <span>
        전국구님의
      </span>
      <span class="block mt__five">
        현재 자산 포트폴리오
      </span>
      <PortfolioChart/>
      <span class="block mt__five">
        추천 자산 포트폴리오
      </span>
      <PortfolioChart/>
    </div>
  </div>
</template>

<script>
import PortfolioChart from './PortfolioChart.vue'
export default {
  components: { PortfolioChart },

}
</script>

<style>

</style>