import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { GIPHYResult, emptyResult } from "@/interfaces";

Vue.use(Vuex);

export default new Vuex.Store<{
  results: GIPHYResult;
}>({
  state: {
    results: emptyResult
  },
  mutations: {
    replaceResults: (state, results) => (state.results = results),
    addResults: (state, results: GIPHYResult) => {
      const newResults = { ...state.results };
      newResults.data = [...newResults.data, ...results.data];
      results.pagination = results.pagination;
      results.meta = results.meta;
      state.results = newResults;
    }
  },
  actions: {
    getResults: async (store, [query, offset = 0]) => {
      if (!offset) store.commit("replaceResults", []);
      const results = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=${encodeURIComponent(
          query
        )}&limit=5&offset=${offset}&rating=G&lang=en`
      );
      if (offset) store.commit("addResults", results.data);
      else store.commit("replaceResults", results.data);
    }
  },
  modules: {},
  getters: {
    results: state => state.results
  }
});
