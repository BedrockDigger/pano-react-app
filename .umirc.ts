import { defineConfig } from 'umi';

export default defineConfig({
  favicon: '/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  proxy: {
    '/receptionist': {
      target: 'http://de.pano.today/',
      changeOrigin: true,
    },
  },
});
