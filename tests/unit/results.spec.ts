import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Results from "@/components/Results.vue";
import router from "@/router";
import { emptyResult } from "@/interfaces";
const localVue = createLocalVue();
localVue.use(Vuex);

const wait = (time: number) =>
  new Promise(resolve => {
    setTimeout(() => resolve(), time);
  });

const mocks = { $t: () => {} };

describe("Results.vue", () => {
  let actions: {
    getResults: jest.Mock;
  };
  let store: any;
  beforeEach(() => {
    actions = {
      getResults: jest.fn()
    };
    store = new Vuex.Store({
      actions,
      getters: {
        results: () => emptyResult
      }
    });
    router.replace(`/${Math.random().toString()}`);
  });

  it("dispatches `getResults` on load", async () => {
    const wrapper = shallowMount(Results, {
      mocks,
      router,
      store,
      localVue
    });
    await wait(100);
    expect(actions.getResults).toHaveBeenCalled();
  });

  it("dispatches `getResults` on clicking `load more` button", async () => {
    const wrapper = shallowMount(Results, {
      mocks,
      router,
      store,
      localVue
    });
    await wait(100);
    wrapper.find("button.load-more").trigger("click");
    await wait(100);
    expect(actions.getResults).toHaveBeenCalledTimes(2);
  });
});
