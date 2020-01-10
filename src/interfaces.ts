export interface GIPHYItem {}

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
