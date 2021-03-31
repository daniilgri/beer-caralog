import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Catalog from "@/views/Catalog.vue";
import Favorites from "@/views/Favorites.vue";
import BeerDetail from "@/views/BeerDetail.vue";
import store from "@/store";
import { SIDEBAR_MUTATION_TYPES } from "@/store/sidebar/mutationTypes";
import { NOTIFICATION_MUTATION_TYPES } from "@/store/notification/mutationTypes";
import { ROUTES } from "@/router/routes";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: ROUTES.CATALOG,
    component: Catalog
  },
  {
    path: "/favorites",
    name: ROUTES.FAVORITES,
    component: Favorites
  },
  {
    path: "/beer/:id",
    name: ROUTES.DETAIL,
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
  store.commit(`notification/${NOTIFICATION_MUTATION_TYPES.REFRESH}`);
});

export default router;
