// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shahinscrapcg.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server : {
      allowedHosts: ['app.machineman.qzz.io']
    }
  },
});
