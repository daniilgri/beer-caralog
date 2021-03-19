import { ActionTree } from "vuex";

import { RootState } from "./../types";
import { BeersState } from "./types";

import { BEERS_MUTATION_TYPES } from "./mutationTypes";

export const actions: ActionTree<BeersState, RootState> = {
  [BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_REQUESTED]({ commit, state }) {
    const xhr = new XMLHttpRequest();
    commit(BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_REQUESTED);
    if (state.query) {
      xhr.open(
        "GET",
        `https://api.punkapi.com/v2/beers?page=1&per_page=${state.count}&beer_name=${state.query}`
      );
    } else {
      xhr.open(
        "GET",
        `https://api.punkapi.com/v2/beers?page=${state.page}&per_page=${state.count}`
      );
    }
    xhr.send();

    xhr.onload = () => {
      if (xhr.status != 200) {
        commit(BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_FAILED);
        return;
      }
      const data = JSON.parse(xhr.responseText);

      commit(BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_SUCCEED, data);
    };

    xhr.onerror = error => {
      console.log(error);
      commit(BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_FAILED);
    };
  },
  [BEERS_MUTATION_TYPES.GET_BEERS_NEXT_REQUESTED]({ commit, state }) {
    const xhr = new XMLHttpRequest();
    commit(BEERS_MUTATION_TYPES.GET_BEERS_NEXT_REQUESTED);

    if (state.query) {
      xhr.open(
        "GET",
        `https://api.punkapi.com/v2/beers?page=${state.page}&per_page=${state.count}&beer_name=${state.query}`
      );
    } else {
      xhr.open(
        "GET",
        `https://api.punkapi.com/v2/beers?page=${state.page}&per_page=${state.count}`
      );
    }
    xhr.send();

    xhr.onload = () => {
      if (xhr.status != 200) {
        commit(BEERS_MUTATION_TYPES.GET_BEERS_NEXT_FAILED);
        return;
      }
      const data = JSON.parse(xhr.responseText);

      commit(BEERS_MUTATION_TYPES.GET_BEERS_NEXT_SUCCEED, data);
    };

    xhr.onerror = error => {
      console.log(error);
      commit(BEERS_MUTATION_TYPES.GET_BEERS_NEXT_FAILED);
    };
  }
};
