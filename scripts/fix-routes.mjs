import fs from "node:fs";

const routes = {
  version: 1,
  include: ["/*"],
  exclude: ["/bootcamp/_astro/*"],
};

fs.writeFileSync("dist/_routes.json", JSON.stringify(routes, null, 2) + "\n");
