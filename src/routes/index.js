import Vue from "vue";
import Router from "vue-router";
// import bus from "@/utils/bus";
// import store from '@/stores/modules/portfolio.js';

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
      // async beforeEnter(
      //   routeTo,
      //   routeFrom,
      //   next
      // ) {
      //   bus.$emit("on:progress");
      //   next();
      // },
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
      path: "/portfolio/asset",
      name: "AssetDetailPage",
      component: () => import("@/views/portfolio/AssetDetailPage.vue"),
      props: true,
    },
    {
      path: "/recommend/product",
      name: "RecommendProductDetailPage",
      component: () =>
        import("@/views/portfolio/RecommendProductDetailPage.vue"),
      props: true,
    },
    {
      path: "/recommend/productlist",
      name: "RecommendPage",
      component: () => import("@/views/portfolio/RecommendPage.vue"),
      props: true,
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
      path: "/budget/create",
      name: "BudgetCreatePage",
      component: () => import("@/views/budget/BudgetCreatePage.vue"),
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

// router.beforeEach((to, from, next) => {
//     store.commit('startSpinner');
//     setTimeout(() => {
//         next();
//     }, 1);
// })

// router.afterEach(() => {
//   setTimeout(() => {
//       store.commit('endSpinner');
//     }, 30000);

// })

export default router;
