<template>
  <div>
    <div>
      <span class="color__gray pointer"
      @click="goPortHome"
      >
        <i class="fas fa-arrow-left"></i>
      </span>
    </div>
    <PortfolioCreateForm/>
  </div>
</template>

<script>
import PortfolioCreateForm from '../../components/porfolio/PortfolioCreateForm.vue'
export default {
  components: { PortfolioCreateForm },
  methods: {
    goPortHome() {
      this.$router.push({
        name:'PortfolioPage'
      })
    }
  }

}
</script>

<style>

</style>