<template>
  <div>
    <div class="title__font portfolio__div">
      <span>
        {{userInfo.name}}님을 위한
      </span>
      <span class="block mt__five">
        금융상품 추천
      </span>
    </div>
    <div class="bgColor__lightgray mt__minusTen">
      <div v-for="[product,value] of Object.entries(recommendList)" :key="product">
        <PortfolioFinanceRecommend :productInfo="value" 
        :productType="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PortfolioFinanceRecommend from '../../components/porfolio/PortfolioFinanceRecommend.vue'
export default {
  components: { PortfolioFinanceRecommend },
  props: ["recommendList"],
  created() {
    this.$store.dispatch('fetchProductInfo')
  },
  computed: {
    ...mapState({
      recommendList : state => state.portfolio.productList,
      userInfo :state => state.portfolio.userInfo
    })
  },
}
</script>

<style>

</style>