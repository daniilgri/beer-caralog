import { GetterTree } from "vuex";

import { RootState } from "../interfaces";
import { FavoritesState, SingleBeer } from "./interfaces";

export type Getters = {
  favoritesPerPage(state: FavoritesState): SingleBeer[];
};

export const getters: GetterTree<FavoritesState, RootState> & Getters = {
  favoritesPerPage: state => {
    return state.favorites.slice(
      (state.currentPage - 1) * state.limit,
      state.currentPage * state.limit
    );
  }
};
