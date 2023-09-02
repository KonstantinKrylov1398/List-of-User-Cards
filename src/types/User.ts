export namespace User {
  export type Entity = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    like: Object | undefined;
    boolean: boolean;
  };
}
