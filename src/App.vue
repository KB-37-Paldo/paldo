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

export default {
  components: { Nav },
  name: "App",
  data() {
    return {
      isShow: true,

      URLTEST:''
    }
  }, 
  mounted() {

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
