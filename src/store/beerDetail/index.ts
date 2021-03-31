import { Module } from "vuex";

import { RootState } from "@/store/interfaces";
import { BeerDetailState } from "@/store/beerDetail/interfaces";
import { mutations } from "@/store/beerDetail/mutations";
import { actions } from "@/store/beerDetail/actions";

export const initialState: BeerDetailState = {
  loading: false,
  beer: {
    name: "",
    tagline: "",
    description: "",
    image_url: "",
    abv: 0,
    ibu: 0,
    ebc: 0,
    food_pairing: [],
    brewers_tips: "",
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
  }
};

export const beerDetail: Module<BeerDetailState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations,
  actions
};
