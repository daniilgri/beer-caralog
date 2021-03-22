import { Module } from "vuex";

import { RootState } from "../types";
import { BeerDetailState } from "./types";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const initialState: BeerDetailState = {
  loading: false,
  beer: {
    name: "",
    tagline: "",
    description: "",
    imageUrl: "",
    abv: 0,
    ibu: 0,
    ebc: 0,
    foodPairing: [],
    brewersTips: "",
    ingredients: {
      hops: [],
      malt: [],
      yeast: ""
    },
    method: {
      fermentation: { temp: { unit: "", value: 0 } },
      mashTemp: [],
      twist: ""
    }
  },
  error: ""
};

export const beerDetail: Module<BeerDetailState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations,
  actions
};
