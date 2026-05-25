import { createRequestHandler } from "react-router";
const requestHandler = createRequestHandler(
  () => import("./assets/server-build-BM2qnd-J.js"),
  "production"
);
const app = {
  async fetch(request, env, ctx) {
    return requestHandler(request, {
      cloudflare: { env, ctx }
    });
  }
};
export {
  app as default
};
