import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index', name: '首页' },
    {
      path: '/course01',
      component: '@/pages/course01/index',
      name: '01 setup and triangle',
    },
  ],
  layout: {},
  fastRefresh: {},
});
