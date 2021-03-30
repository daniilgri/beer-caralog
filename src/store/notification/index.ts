import { Module } from "vuex";

import { RootState } from "@/store/interfaces";
import { NotificationState } from "@/store/notification/interfaces";
import { mutations } from "@/store/notification/mutations";

const initialState: NotificationState = {
  display: false,
  status: "succeed",
  message: ""
};

export const notification: Module<NotificationState, RootState> = {
  namespaced: true,
  state: initialState,
  mutations
};
