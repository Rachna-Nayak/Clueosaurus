import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/Clueosaurus/",
  plugins: [react()],
  optimizeDeps: {
    include: ["word-list-json"], // Force Vite to optimize this package
  },

})
