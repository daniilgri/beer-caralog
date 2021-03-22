import { MutationTree } from "vuex";

import { BeersState, SingleBeer } from "./types";
import { BEERS_MUTATION_TYPES } from "./mutationTypes";

export const mutations: MutationTree<BeersState> = {
  [BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_REQUESTED](state) {
    state.loading = true;
    state.beers = [];
    state.error = "";
    state.page = 1;
  },
  [BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_SUCCEED](state, payload) {
    state.loading = false;
    state.page += 1;
    payload.map((el: SingleBeer) => {
      el.imageUrl = el.image_url;
    });
    state.beers = payload;
  },
  [BEERS_MUTATION_TYPES.GET_BEERS_NEXT_REQUESTED](state) {
    state.loading = true;
  },
  [BEERS_MUTATION_TYPES.GET_BEERS_NEXT_SUCCEED](state, payload) {
    state.loading = false;
    payload.map((el: SingleBeer) => {
      el.imageUrl = el.image_url;
    });
    state.beers.push(...payload);
    state.page += 1;
  },
  [BEERS_MUTATION_TYPES.SET_SEARCH_QUERY](state, payload) {
    state.query = payload;
  }
};
