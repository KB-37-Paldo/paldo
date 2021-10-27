<template>
  <v-app id="app" class="scroll">
    <spinner :loading="loading"></spinner>
    <div class="nav-section">
      <Nav v-if="isShow"/>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Nav from "@/components/common/Nav.vue";
import Spinner from "@/components/common/Spinner.vue";
import { mapState } from 'vuex';
// import bus from "@/utils/bus";

export default {
  components: { Nav,Spinner },
  name: "App",
  data() {
    return {
      isShow: true,
 
    }
  }, 
  computed: {
    ...mapState({
      loading: state=>state.portfolio.LoadingStatus
    })
  },
  watch: {
    $route() {
      if (this.$route.name !== "AboutPage") {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
  },
  methods: {
    onProgress() {
      this.loading = true;
    },
    offProgress() {
      this.loading = false;
    }
  },
  async created() {
    // await bus.$on("on:progress", this.onProgress);
    // await bus.$on("off:progress", this.offProgress);
  }
};
</script>

<style></style>
