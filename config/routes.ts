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
    path: '/layout',
    name: 'layout',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        name: 'top-middle-bottom',
        path: '/layout/pageLevel/top-middle-bottom',
        component: './layout/pageLevel/top-middle-bottom.jsx',
      },
      {
        path: '/layout/multiple-column-center',
        name: 'multiple-column-center',
        component: './layout/mulitple-column-center/index.tsx',
      },
    ],
  },
  // 元素
  {
    path: '/element',
    name: 'element',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        path: '/element/box',
        name: 'box',
        component: './element/box/index.jsx',
      },
      {
        path: '/element/scroll',
        name: 'scroll',
        component: './element/scroll-bar',
      },
      {
        path: '/element/mul-columns-dot',
        name: 'mul-columns-dot',
        component: './element/mul-columns-dot/index.jsx',
      },
    ]
  },
  {
    path: '/antd',
    name: 'antd',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        path: '/antd/message',
        name: 'message',
        component: './antd/message/index.jsx',
      }
    ]
  },
  // 小样式
  {
    path: '/small-style',
    name: 'small-style',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        path: '/small-style/index',
        name: 'small-style',
        component: './smallStyle/index.jsx',
      },
    ]
  },
  {
    component: './404',
  },
];
