import Vue from "vue";
import Vuex from "vuex";
import { GIPHYResult, emptyResult } from "@/interfaces";
import { giphyFetch } from "@/api";

Vue.use(Vuex);

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
      const data = await giphyFetch(query, offset);
      if (offset) store.commit("addResults", data);
      else store.commit("replaceResults", data);
    }
  },
  modules: {},
  getters: {
    results: state => state.results,
    threeColumnView: state => state.threeColumnView,
    darkThemeEnabled: state => state.darkThemeEnabled
  }
});
