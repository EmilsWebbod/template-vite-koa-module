import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
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
