import { MutationTree } from "vuex";

import { NotificationState } from "@/store/notification/interfaces";
import { NOTIFICATION_MUTATION_TYPES } from "@/store/notification/mutationTypes";

export const mutations: MutationTree<NotificationState> = {
  [NOTIFICATION_MUTATION_TYPES.TRIGGER_ERROR](state, payload) {
    state.display = true;
    state.status = "failed";
    state.message = payload;
  },
  [NOTIFICATION_MUTATION_TYPES.TRIGGER_SUCCESS](state) {
    state.display = true;
    state.status = "succeed";
    state.message = "Succeed";
  },
  [NOTIFICATION_MUTATION_TYPES.HIDE](state) {
    state.display = false;
  },
  [NOTIFICATION_MUTATION_TYPES.REFRESH](state) {
    state.message = "";
    state.status = "";
    state.display = false;
  }
};
