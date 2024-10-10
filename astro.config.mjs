// @ts-check
import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  integrations: [partytown({
    config: {
      forward: ['dataLayer.push'],
    }
  })]
});