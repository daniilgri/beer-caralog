import { ActionTree } from "vuex";

import { RootState } from "./../types";
import { BeerDetailState } from "./types";

import { BEER_DETAIL_MUTATION_TYPES } from "./mutationTypes";

export const actions: ActionTree<BeerDetailState, RootState> = {
  [BEER_DETAIL_MUTATION_TYPES.GET_BEER_REQUESTED]({ commit }, id) {
    const xhr = new XMLHttpRequest();
    commit(BEER_DETAIL_MUTATION_TYPES.GET_BEER_REQUESTED);

    xhr.open("GET", `https://api.punkapi.com/v2/beers/${id}`);

    xhr.send();

    xhr.onload = () => {
      if (xhr.status != 200) {
        commit(BEER_DETAIL_MUTATION_TYPES.GET_BEER_FAILED);
        return;
      }
      const data = JSON.parse(xhr.responseText);

      commit(BEER_DETAIL_MUTATION_TYPES.GET_BEER_SUCCEED, data[0]);
    };

    xhr.onerror = error => {
      console.log(error);
      commit(BEER_DETAIL_MUTATION_TYPES.GET_BEER_FAILED);
    };
  }
};
