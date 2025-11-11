import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ensures assets resolve correctly on Vercel
  build: {
    outDir: 'dist', // default output directory
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
