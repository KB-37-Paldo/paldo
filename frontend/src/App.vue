<template>
  <div id="app">
    <Nav v-if="isShow" />
    <router-link :to="{name:'PortfolioPage'}">포트폴리오</router-link> |
    <router-link :to="{name:'BudgetPage'}">지출관리</router-link> |
    <router-link :to="{name:'SubscribePage'}">구독</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "@/components/common/Nav.vue";

export default {
  components: { Nav},
  name: 'App',
  data() {
    return {
      isShow: true
    }
  }, 
  computed:{

  },
  watch: {
    $route() {
      if (this.$route.name !== "AboutPage") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
