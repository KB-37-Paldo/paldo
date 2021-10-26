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
      path: "*",
      redirect: "/",
      // name: "notFound",
      // component: () => import("@/views/NotFoundPage.vue")
    },
    {
      path: "/",
      name: "AboutPage",
      component: () => import("@/views/AboutPage.vue"),
    },
    {
      path: "/portfolio",
      name: "PortfolioPage",
      component: () => import("@/views/portfolio/PortfolioPage.vue"),
    },
    {
      path: "/portfolio/create",
      name: "PortfolioCreatePage",
      component: () => import("@/views/portfolio/PortfolioCreatePage.vue"),
    },
    {
      path: "/portfolio/recommend",
      name: "PortfolioRecommendPage",
      component: () => import("@/views/portfolio/PortfolioRecommendPage.vue"),
    },
    {
      path: "/portfolio/share",
      name: "PortfolioSharePage",
      component: () => import("@/views/portfolio/PortfolioSharePage.vue"),
    },
    {
      path: "/spending",
      name: "SpendingPage",
      component: () => import("@/views/budget/SpendingPage.vue"),
    },
    {
      path: "/spending/update",
      name: "SpendingUpdatePage",
      component: () => import("@/views/budget/SpendingUpdatePage.vue"),
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
      path: "/budget/category",
      name: "CategoryDetailPage",
      component: () => import("@/views/budget/CategoryDetailPage.vue"),
    },
    {
      path: "/analysis",
      name: "AnalysisPage",
      component: () => import("@/views/budget/AnalysisPage.vue"),
    },
    {
      path: "/subscribe",
      name: "SubscribePage",
      component: () => import("@/views/subscribe/SubscribePage.vue"),
    },
  ],
});

export default router;
