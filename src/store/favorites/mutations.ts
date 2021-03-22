import { MutationTree } from "vuex";

import { FavoritesState } from "./types";
import { FAVORITES_MUTATION_TYPES } from "./mutationTypes";

export const mutations: MutationTree<FavoritesState> = {
  [FAVORITES_MUTATION_TYPES.ADD_FAVORITE](state, payload) {
    if (state.favorites.filter(el => el.id === payload.id).length === 0) {
      state.favorites.push(payload);
    }
  },
  [FAVORITES_MUTATION_TYPES.DELETE_FAVORITE](state, payload) {
    state.favorites = state.favorites.filter(el => el.id !== payload);
  }
};
