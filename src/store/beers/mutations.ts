import { MutationTree } from "vuex";

import { BeersState, SingleBeer } from "@/store/beers/interfaces";
import { BEERS_MUTATION_TYPES } from "@/store/beers/mutationTypes";

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
    state.beers = payload;
  },
  [BEERS_MUTATION_TYPES.GET_BEERS_NEXT_REQUESTED](state) {
    state.loading = true;
  },
  [BEERS_MUTATION_TYPES.GET_BEERS_NEXT_SUCCEED](state, payload) {
    state.loading = false;
    state.beers.push(...payload);
    state.page += 1;
  },
  [BEERS_MUTATION_TYPES.SET_SEARCH_QUERY](state, payload) {
    state.query = payload;
  },
  [BEERS_MUTATION_TYPES.SET_AVM_OPTION](state, payload) {
    state.avm = payload;
  },
  [BEERS_MUTATION_TYPES.SET_EBC_OPTION](state, payload) {
    state.ebc = payload;
  },
  [BEERS_MUTATION_TYPES.SET_IBU_OPTION](state, payload) {
    state.ibu = payload;
  }
};
