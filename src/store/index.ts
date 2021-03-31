import Vue from "vue";
import Vuex from "vuex";

import { RootState } from "@/store/interfaces";
import { sidebar } from "@/store/sidebar";
import { beers } from "@/store/beers";
import { favorites } from "@/store/favorites";
import { beerDetail } from "@/store/beerDetail";
import { notification } from "@/store/notification";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: process.env.NODE_ENV !== "production",
  modules: { sidebar, beers, favorites, beerDetail, notification }
});
