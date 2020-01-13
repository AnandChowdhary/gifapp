export interface GIPHYImage {
  height: number;
  size: number;
  url: string;
  webp: string;
  webp_size: number;
  mp4: string;
  mp4_size: number;
  width: number;
}

export interface GIPHYItem {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  import_datetime: string;
  trending_datetime: string;
  images: {
    downsized_large: GIPHYImage;
    fixed_height_small_still: GIPHYImage;
    original: GIPHYImage;
    fixed_height_downsampled: GIPHYImage;
    downsized_still: GIPHYImage;
    fixed_height_still: GIPHYImage;
    downsized_medium: GIPHYImage;
    downsized: GIPHYImage;
    preview_webp: GIPHYImage;
    original_mp4: GIPHYImage;
    fixed_height_small: GIPHYImage;
    fixed_height: GIPHYImage;
    downsized_small: GIPHYImage;
    preview: GIPHYImage;
    fixed_width_downsampled: GIPHYImage;
    fixed_width_small_still: GIPHYImage;
    fixed_width_small: GIPHYImage;
    original_still: GIPHYImage;
    fixed_width_still: GIPHYImage;
    looping: GIPHYImage;
    fixed_width: GIPHYImage;
    preview_gif: GIPHYImage;
    "480w_still": GIPHYImage;
  };
}

export interface GIPHYResult {
  data: GIPHYItem[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status?: number;
    msg?: string;
    response_id?: string;
  };
}

export const emptyResult: GIPHYResult = {
  data: [],
  pagination: {
    total_count: 0,
    count: 0,
    offset: 0
  },
  meta: {}
};
