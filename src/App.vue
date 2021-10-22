<template>
  <v-app id="app" class="scroll">
    <div class="nav-section">
      <Nav v-if="isShow" />
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Nav from "@/components/common/Nav.vue";
import { fetchPortfolio } from "@/api/portfolio.js";
// const vueconfig = require('../vue.config');
export default {
  components: { Nav },
  name: "App",
  data() {
    return {
      isShow: true,
      URLTEST: "",
    };
  },
  mounted() {
    console.log("URL VUE제외 테스트", process.env.PORTFOLIO_SERVICE_URL);
    console.log("URL 테스트", process.env.VUE_APP_PORTFOLIO_SERVICE_URL);
    console.log("숫자 테스트", process.env.VUE_APP_BASE_URL);
    this.URLTEST = fetchPortfolio();
  },
  computed: {},
  watch: {
    $route() {
      // if (this.$route.name !== "AboutPage") {
      //   this.isShow = true;
      // } else {
      //   this.isShow = false;
      // }
    },
  },
  methods: {},
};
</script>

<style></style>
