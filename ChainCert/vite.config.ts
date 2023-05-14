import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import inject from '@rollup/plugin-inject'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({
        protocolImports: true
    })],

  // build: {
    // rollupOptions: {
      // plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
    // },
  // },
})
