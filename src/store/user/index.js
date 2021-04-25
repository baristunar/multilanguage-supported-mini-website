export default {
  namespaced: true,
  state: {
    activeUser: null,
  },
  mutations: {
    setActiveUser(state, pUserData) {
      state.activeUser = pUserData;
    },
  },
  getters: {
    getActiveUser: (state) => state.activeUser,
  },
};
