import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: '/',
      component: './layouts/Welcome.tsx',
    },
    {
      path: '/box-model/index',
      component: './model/box-model/index',
    },
    {
      path: '/layout/flex',
      component: './layout/flex/index.jsx',
    },
    {
      path: '/layout/scroll-position',
      component: './layout/scroll-position/index.jsx',
    },
    {
      path: '/layout/input-layout',
      component: './layout/input-layout/index.jsx',
    },
    {
      path: '/layout/pageLevel/top-bottom',
      component: './layout/pageLevel/top-bottom/index.tsx',
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
      path: '/element/card',
      component: './element/card/index.jsx',
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
      path: '/antd/select',
      component: './antd/select/index.jsx',
    },
    {
      path: '/antd/tree',
      component: './antd/tree/index.jsx',
    },
    {
      path: '/antd/modal',
      component: './antd/modal/index.jsx',
    },
    {
      path: '/small-style/index',
      component: './smallStyle/index.jsx',
    },
    {
      path: '/small-style/highlight',
      component: './smallStyle/highlight/index.jsx',
    },
    {
      path: '/small-style/img',
      component: './smallStyle/img/index.jsx',
    },
    {
      path: '/css3/index',
      component: './css3/index.jsx',
    },
    {
      path: '/element/text-show',
      component: './basic-element/text-show/index.tsx',
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
