import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: '/',
      component: './layouts/Welcome.tsx',
    },
    {
      path: '/layout/flex',
      component: './layout/flex/index.jsx',
    },
    {
      path: '/layout/input-layout',
      component: './layout/input-layout/index.jsx',
    },
    {
      path: '/layout/pageLevel/top-middle-bottom',
      component: './layout/pageLevel/top-middle-bottom/index.jsx',
    },
    {
      path: '/layout/multiple-column-center',
      component: './layout/mulitple-column-center/index.tsx',
    },
    {
      path: '/layout/open-close',
      component: './layout/open-close/index.jsx',
    },
    {
      path: '/element/box',
      component: './element/box/index.jsx',
    },
    {
      path: '/element/scroll',
      component: './element/scroll-bar',
    },
    {
      path: '/element/mul-columns-dot',
      component: './element/mul-columns-dot/index.jsx',
    },
    {
      path: '/element/float-top',
      component: './element/float-top/index.jsx',
    },
    {
      path: '/antd/index',
      component: './antd/index.jsx',
    },
    {
      path: '/antd/input',
      component: './antd/input/index.jsx',
    },
    {
      path: '/antd/button',
      component: './antd/button/index.jsx',
    },
    {
      path: '/antd/message',
      component: './antd/message/index.jsx',
    },
    {
      path: '/antd/tree',
      component: './antd/tree/index.jsx',
    },
    {
      path: '/small-style/index',
      component: './smallStyle/index.jsx',
    },
    {
      path: '/css3/index',
      component: './css3/index.jsx',
    },
    {
      path: '/tools/wheel',
      component: './tools/大转盘/index.jsx',
    },
    {
      path: '/tools/editContent',
      component: './tools/editContent/index.jsx',
    },
    {
      path: '*',
      component: './404',
    },
  ],
  npmClient: 'pnpm',
});
