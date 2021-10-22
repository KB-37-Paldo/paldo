<template>
  <div id="app" class="scroll">
    <div class='nav-section'>
    <Nav v-if="isShow" />
    </div>
    <router-view></router-view>
  </div>
</template>
  
<script>
import Nav from "@/components/common/Nav.vue";
import {fetchPortfolio} from "@/api/portfolio.js";
// const vueconfig = require('../vue.config');
export default {
  components: { Nav},
  name: 'App',
  data() {
    return {
      isShow: true,
      URLTEST:''
    }
  }, 
  mounted() {
    this.URLTEST = fetchPortfolio()
    console.log('나는 끝', this.URLTEST)
  },
  computed:{

  },
  watch: {
    $route() {
      // if (this.$route.name !== "AboutPage") {
      //   this.isShow = true;
      // } else {
      //   this.isShow = false;
      // }
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
