import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  proxy: {
    '/receptionist': {
      'target': 'http://localhost:3030/',
      'changeOrigin': true,
    }
  },
});