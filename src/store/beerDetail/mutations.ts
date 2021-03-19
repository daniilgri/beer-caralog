import { MutationTree } from "vuex";

import { BeerDetailState } from "./types";
import { BEER_DETAIL_MUTATION_TYPES } from "./mutationTypes";

export const mutations: MutationTree<BeerDetailState> = {
  [BEER_DETAIL_MUTATION_TYPES.GET_BEER_REQUESTED](state) {
    state.loading = true;
    state.error = "";
    state.beer = {
      name: "",
      tagline: "",
      description: "",
      imageUrl: "",
      abv: 0,
      ibu: 0,
      ebc: 0,
      foodPairing: [],
      brewersTips: "",
      ingredients: {
        hops: [],
        malt: [],
        yeast: ""
      }
    };
  },
  [BEER_DETAIL_MUTATION_TYPES.GET_BEER_SUCCEED](state, payload) {
    state.loading = false;
    state.beer = payload;
    state.beer.imageUrl = payload.image_url;
    state.beer.foodPairing = payload.food_pairing;
    state.beer.brewersTips = payload.brewers_tips;
  }
};
