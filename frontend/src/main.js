import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import store from "@/stores/index";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueSweetalert2 from "vue-sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import "@/css/index.css";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false;

// sweetalert2 옵션
const options = {
  confirmButtonColor: "#e7ab3c",
  cancelButtonColor: "#757575",
};

Vue.use(VueSweetalert2, options);
Vue.use(Vuetify);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// Vue.use(BootstrapVue);

new Vue({
  vuetify: new Vuetify(),
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
});
