import { Module } from "vuex";

import { RootState } from "../types";
import { SidebarState } from "./types";
import { mutations } from "./mutations";

const initialState: SidebarState = {
  open: false
};

export const sidebar: Module<SidebarState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations
};
