import { ActionTree } from "vuex";

import { RootState } from "@/store/interfaces";
import { BeerDetailState } from "@/store/beerDetail/interfaces";

import { BEER_DETAIL_MUTATION_TYPES } from "@/store/beerDetail/mutationTypes";
import { NOTIFICATION_MUTATION_TYPES } from "@/store/notification/mutationTypes";

export const actions: ActionTree<BeerDetailState, RootState> = {
  [BEER_DETAIL_MUTATION_TYPES.GET_BEER_REQUESTED]({ commit }, id) {
    commit(BEER_DETAIL_MUTATION_TYPES.GET_BEER_REQUESTED);

    return fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(`Error ${response.status}`);
        }

        return response.json();
      })
      .then(data => {
        commit(BEER_DETAIL_MUTATION_TYPES.GET_BEER_SUCCEED, data[0]);
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
