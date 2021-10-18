import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/stores/index';

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  scrollBehavior(to, from) {
    // to, from, savedPosition
    if (to.path !== from.path) {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    // 예시
    // {
    //   path: '/',
    //   name: 'AboutPage',
    //   component: () => import('@/components/common/AboutPage.vue'),
    // },
  ],
});



export default router;