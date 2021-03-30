import { Module } from "vuex";

import { RootState } from "@/store/interfaces";
import { BeersState } from "@/store/beers/interfaces";

import { mutations } from "@/store/beers/mutations";
import { actions } from "@/store/beers/actions";

const initialState: BeersState = {
  loading: false,
  beers: [],
  count: 12,
  limit: 12,
  page: 1,
  query: "",
  avm: 0,
  ibu: 0,
  ebc: 0
};

export const beers: Module<BeersState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations,
  actions
};
