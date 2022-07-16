export default {
  getRequests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.getUserId;
    return state.requests.filter((el) => el.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.getRequests && getters.getRequests.length > 0;
  },
};
