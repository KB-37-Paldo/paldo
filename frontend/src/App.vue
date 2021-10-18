<template>
  <div id="app">
    <router-link :to="{name:'PortfolioPage'}">포트폴리오</router-link> |
    <router-link :to="{name:'BudgetPage'}">지출관리</router-link> |
    <router-link :to="{name:'SubscribePage'}">구독</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

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
