import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    base: '',
    plugins: [react(), tsConfigPaths()],
    server: {
        open: true,
        port: 3000,
    },
    build: {
        outDir: "docs"
    }
})
