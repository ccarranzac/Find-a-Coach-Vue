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
  shouldUpdate(state) {
    const last = state.lastFetch;
    if (!last) {
      return true;
    }
    const current = new Date().getTime();
    return (current - last) / 1000 > 60;
  },
};
