import { MutationTree } from "vuex";

import { SidebarState } from "./types";
import { SIDEBAR_MUTATION_TYPES } from "./mutationTypes";

export const mutations: MutationTree<SidebarState> = {
  [SIDEBAR_MUTATION_TYPES.TOGGLE](state) {
    console.log(state);
    state.open = !state.open;
  }
};
