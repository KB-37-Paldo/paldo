<template>
  <div class="mt__ten center pointer portfolio__sidebar">
    <div class="portfolio__sidebar__div">
      <div class="mr__ten portfolio__sidebar__item" @click="goPortHome" :class="[toActive === 'PortfolioPage'? 'active' : '']">조회</div>
      <div class="mr__ten portfolio__sidebar__item" @click="goProductRecom" :class="[toActive === 'PortfolioRecommendPage'? 'active' : '']">추천</div>
      <div
      class="portfolio__sidebar__item"
      @click="goPortShare" :class="[toActive === 'PortfolioPage'? 'active' : '']">공유</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromActive:'',
      toActive: ''
    }
  },
  watch: {
    $route(to,from) {
			this.fromActive = from.name;
			this.toActive = to.name;
      console.log(this.fromActive, this.toActive)
      console.log(this.toActive)
		}
  },
  methods : {
    goPortHome() {
      this.$router.push({
        name:'PortfolioPage'
      })
    },
    goProductRecom() {
      this.$router.push({
        name:'PortfolioRecommendPage'
      })
    },
    goPortShare() {
      this.$swal('아직안만들었어용')
      this.$router.push({
        name:'PortfolioPage'
      })
    }
  }
}
</script>

<style>

</style>