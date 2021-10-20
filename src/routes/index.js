import Vue from "vue";
import Router from "vue-router";
// import store from '@/stores/index';

Vue.use(Router);

const router = new Router({
  mode: "history",
  scrollBehavior(to, from) {
    // to, from, savedPosition
    if (to.path !== from.path) {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "PortfolioPage",
      component: () => import("@/views/portfolio/PortfolioPage.vue"),
    },
    {
      path: "/portfolio/create",
      name: "PortfolioCreatePage",
      component: () => import("@/views/portfolio/PortfolioCreatePage.vue"),
    },
    {
      path: "/spending",
      name: "SpendingPage",
      component: () => import("@/views/budget/SpendingPage.vue"),
    },
    {
      path: "/budget",
      name: "BudgetPage",
      component: () => import("@/views/budget/BudgetPage.vue"),
    },
    {
      path: "/budget/setting",
      name: "BudgetSettingPage",
      component: () => import("@/views/budget/BudgetSettingPage.vue"),
    },
    {
      path: "/subscribe",
      name: "SubscribePage",
      component: () => import("@/views/subscribe/SubscribePage.vue"),
    },
  ],
});

export default router;
