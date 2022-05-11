import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  routes: [
    { path: '/', component: '@/pages/home/index', name: '首页' },
    {
      path: '/course01',
      component: '@/pages/course01/index',
      name: '01 setup and triangle',
    },
    {
      path: '/course02',
      component: '@/pages/course02/index',
      name: '02 rotating 3D Cube',
    },
  ],
  layout: {},
  fastRefresh: {},
});
