import { ActionTree } from "vuex";

import { RootState } from "@/store/interfaces";
import { BeersState } from "@/store/beers/interfaces";

import { BEERS_MUTATION_TYPES } from "@/store/beers/mutationTypes";
import { NOTIFICATION_MUTATION_TYPES } from "@/store/notification/mutationTypes";

export const actions: ActionTree<BeersState, RootState> = {
  [BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_REQUESTED]({ commit, state }) {
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

    return fetch(query)
      .then(response => {
        return response.json();
      })
      .then(data => {
        commit(BEERS_MUTATION_TYPES.GET_BEERS_INITIAL_SUCCEED, data);
      })
      .catch(error => {
        commit(
          `notification/${NOTIFICATION_MUTATION_TYPES.TRIGGER_ERROR}`,
          error,
          { root: true }
        );
      });
  },
  [BEERS_MUTATION_TYPES.GET_BEERS_NEXT_REQUESTED]({ commit, state }) {
    commit(BEERS_MUTATION_TYPES.GET_BEERS_NEXT_REQUESTED);

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

    return fetch(query)
      .then(response => {
        return response.json();
      })
      .then(data => {
        commit(BEERS_MUTATION_TYPES.GET_BEERS_NEXT_SUCCEED, data);
      })
      .catch(error => {
        commit(
          `notification/${NOTIFICATION_MUTATION_TYPES.TRIGGER_ERROR}`,
          error,
          { root: true }
        );
      });
  }
};
