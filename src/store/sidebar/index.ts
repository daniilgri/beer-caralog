import { Module } from "vuex";

import { RootState } from "@/store/interfaces";
import { SidebarState } from "@/store/sidebar/interfaces";
import { mutations } from "@/store/sidebar/mutations";

const initialState: SidebarState = {
  open: false
};

export const sidebar: Module<SidebarState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations
};
