import Vue from "vue";
import Vuex from "vuex";

import { RootState } from "./types";
import { sidebar } from "./sidebar";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  strict: process.env.NODE_ENV !== "production",
  modules: { sidebar }
});
