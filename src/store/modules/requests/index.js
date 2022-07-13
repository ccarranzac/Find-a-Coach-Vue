import requestsMutations from './mutations';
import requestsGetters from './getters';
import requestsActions from './actions';

export default {
  state() {
    return {};
  },
  mutations: requestsMutations,
  getters: requestsGetters,
  actions: requestsActions,
};
