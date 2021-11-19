import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [
      { icon: "mdi-account", text: "Datos personales", view: "/" },
      { icon: "mdi-book-open-page-variant-outline", text: "Datos académicos", view: "/estudios" },
      { icon: "mdi-code-json", text: "Proyectos", view: "/proyectos" },
    ],
    selected: 0,
    hidenDrawer: false
  },
  mutations: {
    updateSelected(state, payload) {
      state.selected = payload.amount;
    },
    updateHidenDrawer(state, payload) {
      state.hidenDrawer = payload.amount;
    },
  },
  actions: {
    updateSelected({ commit }, value) {
      commit({
        type: "updateSelected",
        amount: value,
      });
    },
    updateHidenDrawer({ commit }, value) {
      commit({
        type: "updateHidenDrawer",
        amount: value,
      });
    },

  },
  modules: {
  }
})
