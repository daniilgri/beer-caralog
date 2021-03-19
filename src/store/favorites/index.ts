import { Module } from "vuex";

import { RootState } from "../types";
import { FavoritesState } from "./types";
import { mutations } from "./mutations";

const initialState: FavoritesState = {
  favorites: []
};

export const favorites: Module<FavoritesState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations
};
