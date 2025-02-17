/// <reference types='vite/client' />
/// <reference types='vitest' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-app',
  server: {
    host: true,
    port: 8081,
    allowedHosts: ["test-a-testf-vqdfushn6m7e-614524359.us-east-2.elb.amazonaws.com", "prod-a-prodf-lfvdv5xty3ip-1594211085.us-east-2.elb.amazonaws.com"]
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },  
})