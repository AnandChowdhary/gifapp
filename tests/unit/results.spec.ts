import { shallowMount, createLocalVue } from "@vue/test-utils";
import Results from "@/components/Results.vue";
import Vuex from "vuex";
import store from "@/store";
import router from "@/router";

const mocks = { $t: () => {} };
const localVue = createLocalVue();
localVue.use(Vuex);
const options = {
  store,
  router,
  localVue,
  mocks
};

describe("Results.vue", () => {
  it("has visible empty state", () => {
    const wrapper = shallowMount(Results, options);
    expect(wrapper.find(".info-state-empty").isVisible()).toBeTruthy();
  });
  it("has no error state", () => {
    const wrapper = shallowMount(Results, options);
    expect(wrapper.find(".info-state-error").element).toBeUndefined();
  });
});
