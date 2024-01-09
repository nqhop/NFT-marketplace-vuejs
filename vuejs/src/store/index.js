import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      widthMonitorChanging: 0,
    };
  },
  mutations: {
    monitorChanging(state, payload) {
      state.widthMonitorChanging = payload.widthMonitorChanging;
    },
  },
  getters: {
    getWidthMonitorChanging(state) {
      return state.widthMonitorChanging;
    },
  },
});
export default store;
