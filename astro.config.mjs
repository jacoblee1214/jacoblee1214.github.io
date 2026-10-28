import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jacoblee1214.github.io',
  integrations: [mdx(), tailwind()],
  // paper-notes 의 옛 Jekyll Pages 주소 → 사이트 /papers/ (2026-10-28 Pages 끔)
  redirects: {
    '/paper-notes': '/papers/',
    '/paper-notes/papers/dexscrew': '/papers/dexscrew/',
    '/paper-notes/papers/do_as_i_do': '/papers/do_as_i_do/',
    '/paper-notes/papers/hydra0': '/papers/hydra0/',
  }
});
