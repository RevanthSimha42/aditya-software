import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

// export default defineConfig({
//   server: {
//     allowedHosts: ['238c-183-83-173-209.ngrok-free.app'],
//   },
// });
