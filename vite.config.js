import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/Clueosaurus/",
  plugins: [react(), svgr()],
  optimizeDeps: {
    include: ["word-list-json"], // Force Vite to optimize this package
  },

})
