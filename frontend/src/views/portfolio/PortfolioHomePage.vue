<template>
  <div>
    <!-- 포트폴리오 있을 때 -->
    <template v-if="isPort">
      <PortfolioItem/>
    </template>
    <!-- 포트폴리오 없을 때 -->
    <template v-else>
      <PortfolioNone/>
    </template>
  </div>
</template>

<script>
import PortfolioItem from '@/components/porfolio/PortfolioItem.vue'
import PortfolioNone from '../../components/porfolio/PortfolioNone.vue'
export default {
  data() {
    return {
      isPort : false
    }
  },
  components: { PortfolioItem,PortfolioNone },

}
</script>

<style>

</style>