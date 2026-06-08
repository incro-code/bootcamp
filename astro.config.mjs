import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

const mountPath = "/bootcamp";

function webflowRoutesFix() {
  return {
    name: "webflow-routes-fix",
    hooks: {
      "astro:build:done": ({ dir }) => {
        const routesPath = path.join(dir.pathname, "_routes.json");
        fs.writeFileSync(
          routesPath,
          `${JSON.stringify(
            {
              version: 1,
              include: ["/*"],
              exclude: [`${mountPath}/_astro/*`],
            },
            null,
            2,
          )}\n`,
        );
      },
    },
  };
}

export default defineConfig({
  base: mountPath,
  trailingSlash: "never",
  build: {
    assetsPrefix: mountPath,
  },
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [webflowRoutesFix()],
});
