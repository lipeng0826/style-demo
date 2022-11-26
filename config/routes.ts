export default [
  {
    path: '/',
    name: 'index',
    component: './Welcome',
    layout: false,
    hideInMenu: true,
  },
  // 布局
  {
    path: '/layout/pageLevel/top-middle-bottom',
    name: 'box',
    component: './layout/pageLevel/top-middle-bottom.jsx',
    layout: false,
    hideInMenu: true,
  },
  {
    path: '/layout/multiple-column-center',
    name: 'box',
    component: './layout/mulitple-column-center/index.tsx',
    layout: false,
    hideInMenu: true,
  },
  // 元素
  {
    path: '/element/box',
    name: 'box',
    component: './element/box/index.jsx',
    layout: false,
    hideInMenu: true,
  },
  {
    path: '/element/scroll',
    name: 'scroll',
    component: './element/scroll-bar',
    layout: false,
    hideInMenu: true,
  },
  {
    path: '/element/mul-columns-dot',
    name: 'scroll',
    component: './element/mul-columns-dot/index.jsx',
    layout: false,
    hideInMenu: true,
  },
  {
    path: '/antd/message',
    name: 'scroll',
    component: './antd/message/index.jsx',
    layout: false,
    hideInMenu: true,
  },
  // 小样式
  {
    path: '/small-style/index',
    name: 'small-style',
    component: './smallStyle/index.jsx',
    layout: false,
    hideInMenu: true,
  },
  {
    component: './404',
  },
];
