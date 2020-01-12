import { giphyFetch } from "@/api";

describe("api.ts", () => {
  it("gets trending GIFs", async () => {
    const results = await giphyFetch();
    expect(results.data.length).toBeGreaterThan(1);
  });

  it("gets paginated trending GIFs", async () => {
    const results = await giphyFetch(undefined, 9);
    expect(results.pagination.offset).toBe(9);
  });

  it("gets search results", async () => {
    const results = await giphyFetch("kittens");
    expect(results.data.length).toBeGreaterThan(1);
  });

  it("gets paginated search results", async () => {
    const results = await giphyFetch("kittens", 9);
    expect(results.pagination.offset).toBe(9);
  });

  it("results have mp4 URL", async () => {
    const result = (await giphyFetch()).data[0];
    expect(result.images.original_mp4).toBeDefined();
  });

  it("results are rated G", async () => {
    const result = (await giphyFetch()).data[0];
    expect(result.rating).toBe("g");
  });
});
