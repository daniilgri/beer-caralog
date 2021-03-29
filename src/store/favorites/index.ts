import { Module } from "vuex";

import { RootState } from "@/store/interfaces";
import { FavoritesState } from "@/store/favorites/interfaces";
import { mutations } from "@/store/favorites/mutations";
import { getters } from "@/store/favorites/getters";

const initialState: FavoritesState = {
  favorites: [],
  currentPage: 1,
  pageCount: 0,
  limit: 5,
  visiblePagesCount: 5
};

export const favorites: Module<FavoritesState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations,
  getters
};
