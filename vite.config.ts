import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2001,
    proxy: {
      '/api': {
        target: `http://localhost:2000`,
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'public'
  }
});
