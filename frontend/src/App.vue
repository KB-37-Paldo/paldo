<template>
  <div id="app">
    <PortfolioPage/>
    <BudgetPage/>
    <SubscribePage/>
  </div>
</template>

<script>
import BudgetPage from './views/budget/BudgetPage.vue'
import PortfolioPage from './views/portfolio/PortfolioPage.vue'
import SubscribePage from './views/subscribe/SubscribePage.vue'
export default {
  components: { PortfolioPage, BudgetPage, SubscribePage },

  name: 'App',
  data() {
    return {

    }
  }, 
  computed:{

  },
  methods: {

  }
}
</script>

<style>
</style>
