import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [tailwind(), playformCompress(), icon(), sitemap(), react(), robotsTxt()],
  experimental: {
    env: {
      schema: {},
    },
  },
});
