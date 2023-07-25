export namespace Auth {
  export type Entity = {
    email: string;
    password: string;
  };
  export type Submit = {
    setSubmitting: (props: boolean) => void;
  };
  export type Field = {
    name: string;
  };
}
