import { MutationTree } from "vuex";

import { BeerDetailState } from "@/store/beerDetail/interfaces";
import { BEER_DETAIL_MUTATION_TYPES } from "@/store/beerDetail/mutationTypes";
import { initialState } from "@/store/beerDetail/index";

export const mutations: MutationTree<BeerDetailState> = {
  [BEER_DETAIL_MUTATION_TYPES.GET_BEER_REQUESTED](state) {
    state.loading = true;
    state.beer = initialState.beer;
  },
  [BEER_DETAIL_MUTATION_TYPES.GET_BEER_SUCCEED](state, payload) {
    state.loading = false;
    state.beer = payload;
  }
};
