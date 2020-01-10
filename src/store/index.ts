import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    updateResults: (state, results) => (state.results = results)
  },
  actions: {
    getResults: async (store, query) => {
      const results = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6&q=${encodeURIComponent(
          query
        )}&limit=5&offset=0&rating=G&lang=en`
      );
      store.commit("updateResults", results.data);
    }
  },
  modules: {},
  getters: {
    results: state => state.results
  }
});
