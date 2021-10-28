<template>
  <div class="portfolio__div">
    <!-- mt__ten  -->
    <div class="title__font">
      <span>
        다른 사람들의</span>
        <span class="block">
        포트폴리오 보기
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