import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Translation files
import en from "@/i18n/en";

Vue.config.productionTip = false;
Vue.use(VueI18n);

const messages = {
  en
};
const i18n = new VueI18n({
  locale: "en",
  messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
