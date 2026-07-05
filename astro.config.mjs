// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://shahinscrap.com',
  vite: {
    plugins: [tailwindcss()],
    server : {
      allowedHosts: ['app.machineman.qzz.io']
    }
  },
});
