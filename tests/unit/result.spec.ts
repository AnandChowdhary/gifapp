import { shallowMount } from "@vue/test-utils";
import Result from "@/components/Result.vue";

const sampleResult = {
  type: "gif",
  id: "52F9eVNiorHmgBCq1p",
  url: "https://giphy.com/gifs/cute-aww-eyebleach-52F9eVNiorHmgBCq1p",
  slug: "cute-aww-eyebleach-52F9eVNiorHmgBCq1p",
  username: "exampleUsername",
  source:
    "https://www.reddit.com/r/Eyebleach/comments/9nvhcf/the_impossible_occurred_all_of_them_are_sitting/",
  title: "adorable kittens GIF",
  rating: "g",
  source_post_url:
    "https://www.reddit.com/r/Eyebleach/comments/9nvhcf/the_impossible_occurred_all_of_them_are_sitting/",
  import_datetime: "2018-10-14 06:11:58",
  images: {
    original: {
      frames: "200",
      hash: "461f13fabda1e8367b929605eb5de456",
      height: "480",
      mp4: "https://media2.giphy.com/media/52F9eVNiorHmgBCq1p/giphy.mp4",
      mp4_size: "2917021",
      size: "13410220",
      url: "https://media2.giphy.com/media/52F9eVNiorHmgBCq1p/giphy.gif",
      webp: "https://media2.giphy.com/media/52F9eVNiorHmgBCq1p/giphy.webp",
      webp_size: "1916950",
      width: "270"
    },
    original_mp4: {
      height: "480",
      mp4: "https://media2.giphy.com/media/52F9eVNiorHmgBCq1p/giphy.mp4",
      mp4_size: "2917021",
      width: "271"
    }
  }
};
const mocks = { $t: () => {} };
const options = {
  propsData: { item: sampleResult },
  mocks
};

describe("Result.vue", () => {
  it("renders item video", () => {
    const wrapper = shallowMount(Result, options);
    expect(wrapper.find("video").element).toBeDefined();
  });

  it("video has mp4 url", () => {
    const wrapper = shallowMount(Result, options);
    expect(wrapper.find("video").element.getAttribute("src")).toBe(
      "https://media2.giphy.com/media/52F9eVNiorHmgBCq1p/giphy.mp4"
    );
  });

  it("video autoplays if no prefers-reduced-motion", () => {
    const wrapper = shallowMount(Result, options);
    expect(wrapper.find("video").element.getAttribute("autoplay")).toBeTruthy();
  });

  it("has correct title", () => {
    const wrapper = shallowMount(Result, options);
    expect(wrapper.find("h2").text()).toBe("adorable kittens GIF");
  });
});
