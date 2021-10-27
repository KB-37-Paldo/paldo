<template>
  <div class="portfolio__div">
    <div class="mt__ten title__font">
      <span>
        포트폴리오 셰어링
      </span>
      <div class="bgColor__lightgray mt__minusTen">
        <PortfolioShareItem shareType="age"/>
        <PortfolioShareItem shareType="money"/>
        <PortfolioShareItem shareType="investType"/>
      </div>
    </div>
    <PortfolioSideBar/>
  </div>
</template>

<script>
import PortfolioShareItem from '../../components/porfolio/PortfolioShareItem.vue'
import PortfolioSideBar from '../../components/porfolio/PortfolioSideBar.vue'
export default {
  components: { PortfolioSideBar, PortfolioShareItem },
  created() {

  },

}
</script>

<style>

</style>