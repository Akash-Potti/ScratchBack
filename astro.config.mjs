import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  // i18n settings


  integrations: [mdx(), compress({
    CSS: true,
    HTML: false,
    Image: false,
    JavaScript: true,
    SVG: false
  }), tailwind()],
  // site: 'http://localhost:4321',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    clientPrerender: true
  },
  output: "hybrid",
  adapter: cloudflare({ 
    mode: 'directory',
    functionPerRoute: true,
    routes: {
      strategy: 'auto'
    } 
  })
});
