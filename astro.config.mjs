import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  base: "/bootcamp",
  trailingSlash: "never",
  build: {
    assetsPrefix: "/bootcamp",
  },
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
