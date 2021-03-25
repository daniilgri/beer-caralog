import { MutationTree } from "vuex";

import { FavoritesState } from "@/store/favorites/interfaces";
import { FAVORITES_MUTATION_TYPES } from "@/store/favorites/mutationTypes";

export const mutations: MutationTree<FavoritesState> = {
  [FAVORITES_MUTATION_TYPES.ADD_FAVORITE](state, payload) {
    if (state.favorites.filter(el => el.id === payload.id).length === 0) {
      state.favorites.push(payload);
      state.pageCount = Math.ceil(
        state.favorites.length / state.visiblePagesCount
      );
    }
  },
  [FAVORITES_MUTATION_TYPES.DELETE_FAVORITE](state, payload) {
    state.favorites = state.favorites.filter(el => el.id !== payload);
  },
  [FAVORITES_MUTATION_TYPES.NEXT_PAGE](state) {
    if (state.currentPage < 1) {
      state.currentPage += 1;
    }
  },
  [FAVORITES_MUTATION_TYPES.PREVIOUS_PAGE](state) {
    if (state.currentPage > 1) {
      state.currentPage -= 1;
    }
  },
  [FAVORITES_MUTATION_TYPES.CHANGE_PAGE](state, payload) {
    state.currentPage = payload;
  }
};
