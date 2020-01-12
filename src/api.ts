import axios from "axios";
import { GIPHYResult } from "@/interfaces";

const LIMIT = 9;

// In the future, this can be an environment variable
const GIPHY_API_KEY = "CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6";

export const giphyFetch = async (query?: string, offset = 0) => {
  return (
    await axios.get<GIPHYResult>(
      `https://api.giphy.com/v1/gifs/${
        query
          ? `search?lang=en&q=${encodeURIComponent(query)}`
          : `trending?lang=en`
      }&api_key=${GIPHY_API_KEY}&limit=${LIMIT}&offset=${offset}&rating=G`
    )
  ).data;
};
