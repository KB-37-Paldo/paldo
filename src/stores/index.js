import Vue from 'vue';
import Vuex from 'vuex';
import portfolio from "./modules/portfolio.js";
import budget from "./modules/budget.js";
import subscribe from "./modules/subscribe.js";




Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        portfolio,
        budget,
        subscribe
    },
});

