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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
