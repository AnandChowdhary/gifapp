import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { GIPHYResult, emptyResult } from "@/interfaces";

Vue.use(Vuex);

const LIMIT = 9;

export default new Vuex.Store<{
  results: GIPHYResult;
  threeColumnView: boolean;
  darkThemeEnabled: boolean;
}>({
  state: {
    results: emptyResult,
    threeColumnView: false,
    darkThemeEnabled: false
  },
  mutations: {
    replaceResults: (state, results: GIPHYResult) => (state.results = results),
    addResults: (state, results: GIPHYResult) => {
      const newResults = { ...state.results };
      newResults.data = [...newResults.data, ...results.data];
      results.pagination = results.pagination;
      results.meta = results.meta;
      state.results = newResults;
    },
    toggleView: (state, view: boolean) => (state.threeColumnView = view),
    toggleTheme: (state, theme: boolean) => (state.darkThemeEnabled = theme)
  },
  actions: {
    getResults: async (store, [query, offset = 0]) => {
      if (!offset) store.commit("replaceResults", []);
      const results = await axios.get(
        query
          ? `https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=${encodeURIComponent(
              query
            )}&limit=${LIMIT}&offset=${offset}&rating=G&lang=en`
          : `https://api.giphy.com/v1/gifs/trending?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&limit=${LIMIT}&offset=${offset}&rating=G&lang=en`
      );
      if (offset) store.commit("addResults", results.data);
      else store.commit("replaceResults", results.data);
    }
  },
  modules: {},
  getters: {
    results: state => state.results,
    threeColumnView: state => state.threeColumnView,
    darkThemeEnabled: state => state.darkThemeEnabled
  }
});
