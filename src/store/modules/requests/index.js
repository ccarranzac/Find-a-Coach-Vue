import requestsMutations from './mutations';
import requestsGetters from './getters';
import requestsActions from './actions';

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: requestsMutations,
  getters: requestsGetters,
  actions: requestsActions,
};
