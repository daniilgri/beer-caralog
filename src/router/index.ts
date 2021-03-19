import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Catalog from "../views/Catalog.vue";
import Favorites from "../views/Favorites.vue";
import BeerDetail from "../views/BeerDetail.vue";
import store from "../store";
import { SIDEBAR_MUTATION_TYPES } from "../store/sidebar/mutationTypes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Catalog",
    component: Catalog
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites
  },
  {
    path: "/beer/:id",
    name: "Detail",
    component: BeerDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(() => {
  store.commit(`sidebar/${SIDEBAR_MUTATION_TYPES.CLOSE}`);
});

export default router;
