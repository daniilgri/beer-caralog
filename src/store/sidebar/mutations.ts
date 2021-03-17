import { MutationTree } from "vuex";

import { SidebarState } from "./types";
import { PostsMutationsTypes } from "./mutationTypes";

export const mutations: MutationTree<SidebarState> = {
  [PostsMutationsTypes.TOGGLE](state) {
    console.log(state);
    state.open = !state.open;
  }
};
