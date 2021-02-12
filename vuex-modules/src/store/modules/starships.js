const INIT_DATA = "INIT_DATA_STARSHIPS";
const SET_RESULTS = "SET_RESULTS";
const SET_NEXT = "SET_NEXT";
const SET_PREVIOUS = "SET_PREVIOUS";
const SET_COUNT = "SET_COUNT";
const NAMESPACE = "starships/";

import { getStarshipsList } from "@/api/starships.js";

const starships = {
  namespaced: true,
  state: () => ({
    results: [],
    next: null,
    previous: null,
    count: null,
  }),
  mutations: {
    [SET_RESULTS](state, payload) {
      state.results = payload;
    },
    [SET_NEXT](state, payload) {
      state.next = payload;
    },
    [SET_PREVIOUS](state, payload) {
      state.previous = payload;
    },
    [SET_COUNT](state, payload) {
      state.count = payload;
    },
  },
  actions: {
    async [INIT_DATA]({ commit, state }) {
      if (state.results.length == 0) {
        const response = await getStarshipsList();

        const data = response.data;

        commit(SET_RESULTS, data.results);
        commit(SET_NEXT, data.next);
        commit(SET_PREVIOUS, data.previous);
        commit(SET_COUNT, data.count);
      }
    },
  },
  getters: {},
};

export default starships;
export { INIT_DATA, NAMESPACE };
