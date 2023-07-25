export namespace Api {
  export type Response<T> = {
    data: T;
    page: number;
    per_page: number;
    support: {};
    total: number;
    total_pages: number;
  };
}
