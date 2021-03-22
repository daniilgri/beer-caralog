import { MutationTree } from "vuex";

import { BeerDetailState } from "./types";
import { BEER_DETAIL_MUTATION_TYPES } from "./mutationTypes";
import { initialState } from "./index";

export const mutations: MutationTree<BeerDetailState> = {
  [BEER_DETAIL_MUTATION_TYPES.GET_BEER_REQUESTED](state) {
    state.loading = true;
    state.error = "";
    state.beer = initialState.beer;
  },
  [BEER_DETAIL_MUTATION_TYPES.GET_BEER_SUCCEED](state, payload) {
    state.loading = false;
    state.beer = payload;
    state.beer.imageUrl = payload.image_url;
    state.beer.foodPairing = payload.food_pairing;
    state.beer.brewersTips = payload.brewers_tips;
    state.beer.method.mashTemp = payload.method.mash_temp;
  }
};
