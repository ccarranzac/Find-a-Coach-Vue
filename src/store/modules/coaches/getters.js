export default {
  getCoaches(state) {
    return state.coaches;
  },
  haveCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = getters.getCoaches;
    const userId = rootGetters.getUserId;
    return coaches.some((el) => el.id === userId);
  },
};
