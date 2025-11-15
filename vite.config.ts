import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Set `base` to the repository subpath so GitHub Pages serves assets correctly.
export default defineConfig({
  base: '/island-travel/',
  plugins: [react()],
})
