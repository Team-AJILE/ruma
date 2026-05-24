import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig(({ isSsrBuild }) => ({
  build: {
    rollupOptions: isSsrBuild
      ? { input: "./workers/app.ts" }
      : undefined,
  },
  plugins: [
    cloudflareDevProxy(),
    reactRouter(),
    tsconfigPaths(),
  ],
}));
