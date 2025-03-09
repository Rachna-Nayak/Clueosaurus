import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Clueosaurus/",
  optimizeDeps: {
    include: ["word-list-json"], // Force Vite to optimize this package
  },

})
