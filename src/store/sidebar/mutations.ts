import { MutationTree } from "vuex";

import { SidebarState } from "./types";
import { SIDEBAR_MUTATION_TYPES } from "./mutationTypes";

export const mutations: MutationTree<SidebarState> = {
  [SIDEBAR_MUTATION_TYPES.CLOSE](state) {
    state.open = false;
  },
  [SIDEBAR_MUTATION_TYPES.OPEN](state) {
    state.open = true;
  }
};
