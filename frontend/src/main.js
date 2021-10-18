import Vue from 'vue'
import App from './App.vue'
import router from '@/routes/index';
import store from '@/stores/index';
import VueSweetalert2 from "vue-sweetalert2";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/css/index.css'
import 'sweetalert2/dist/sweetalert2.min.css';

import ChartPlugin from '@/plugins/ChartPlugin';
Vue.use(ChartPlugin);

Vue.config.productionTip = false

// sweetalert2 옵션
const options = {
  confirmButtonColor: '#e7ab3c',
  cancelButtonColor: '#757575',
};

Vue.use(VueSweetalert2,options);

// Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
