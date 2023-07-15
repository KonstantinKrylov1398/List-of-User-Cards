declare module "*.jpg" {
  const path: any;
  export = path;
}

declare module "*.png" {
  const path: any;
  export = path;
}

declare module "*.svg" {
  const content: any;
  export default content;
}
