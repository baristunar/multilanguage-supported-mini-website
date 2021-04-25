import Vue from "vue";
import Vuex from "vuex";
import user from "./user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "en",
  },
  mutations: {
    setLang(state, pLang) {
      state.lang = pLang;
    },
  },
  actions: {},
  getters: {
    getLang: (state) => state.lang,
  },
  modules: {
    user,
  },
});
