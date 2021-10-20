import Vue from "vue";
import App from "./App.vue";
import router from "@/routes/index";
import store from "@/stores/index";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueSweetalert2 from "vue-sweetalert2";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//fontAwsom
// far
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
// fas
import { faArrowLeft, faWallet, faDollarSign, faCalendarAlt, faCompass, faArrowAltCircleRight, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import "@/css/index.css";
import "sweetalert2/dist/sweetalert2.min.css";

import ChartPlugin from '@/plugins/ChartPlugin';
Vue.use(ChartPlugin);


Vue.config.productionTip = false;

// sweetalert2 옵션
const options = {
  confirmButtonColor: "#e7ab3c",
  cancelButtonColor: "#757575",
};

Vue.use(VueSweetalert2, options);
Vue.use(Vuetify);
Vue.component("font-awesome-icon", FontAwesomeIcon);

library.add(faArrowLeft, faWallet, faDollarSign, faCalendarAlt, faCompass, faArrowAltCircleRight, faTimesCircle) //fas lib
library.add(faCheckCircle) //far lib

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
