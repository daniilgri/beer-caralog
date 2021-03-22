import { Module } from "vuex";

import { RootState } from "../types";
import { BeersState } from "./types";

import { mutations } from "./mutations";
import { actions } from "./actions";

const initialState: BeersState = {
  loading: false,
  error: "",
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
