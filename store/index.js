import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      mainDrawer: false
    },
    getters: {
      getMainDrawer: state => state.mainDrawer
    },
    mutations: {
      toggleMainDrawer(state) {
        state.mainDrawer = !state.mainDrawer;
      }
    },
    actions: {
      toggleMainDrawer({ commit }) {
        commit("toggleMainDrawer");
      }
    }
  });
};

export default createStore;
