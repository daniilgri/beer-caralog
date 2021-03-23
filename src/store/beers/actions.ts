import { ActionTree } from "vuex";

import { RootState } from "@/store/interfaces";
import { BeersState } from "@/store/beers/interfaces";

import { BEERS_MUTATION_TYPES } from "@/store/beers/mutationTypes";

export const actions: ActionTree<BeersState, RootState> = {
  [BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_REQUESTED]({ commit, state }) {
    const xhr = new XMLHttpRequest();
    commit(BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_REQUESTED);
    let query: string = `https://api.punkapi.com/v2/beers?page=${state.page}&per_page=${state.count}`;

    if (state.query) {
      query += `&beer_name=${state.query}`;
    }

    if (state.avm > 0) {
      query += `&abv_lt=${state.avm}`;
    }

    if (state.ibu > 0) {
      query += `&ibu_lt=${state.ibu}`;
    }

    if (state.ebc > 0) {
      query += `&ebc=${state.ebc}`;
    }

    xhr.open("GET", query);
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
