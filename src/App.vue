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
    console.log('URL 테스트',process.env.VUE_APP_PORTFOLIO_SERVICE_URL);
    console.log('숫자 테스트',process.env.VUE_APP_BASE_URL);
    this.URLTEST = process.env.VUE_APP_PORTFOLIO_SERVICE_URL;
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
