import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    svgr({
      svgrOptions: {
        icon: true,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      },
    }),
  ],
  server: {
    host: '0.0.0.0', // 외부 접속 허용
    port: 5173, // 원하는 포트
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
