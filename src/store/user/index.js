export default {
  namespaced: true,
  state: {
    activeUser: null,
  },
  mutations: {
    setActiveUser(state, pUserData) {
      state.activeUser = pUserData;
      console.log(state.activeUser)
    },
  },
  getters: {
    getActiveUser: (state) => state.activeUser,
  },
};
