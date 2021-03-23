import { Module } from "vuex";

import { RootState } from "@/store/interfaces";
import { FavoritesState } from "@/store/favorites/interfaces";
import { mutations } from "@/store/favorites/mutations";

const initialState: FavoritesState = {
  favorites: []
};

export const favorites: Module<FavoritesState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations
};
