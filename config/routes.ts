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
    ],
  },
  // antd
  {
    path: '/antd',
    name: 'antd',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        path: '/antd/index',
        name: 'index',
        component: './antd/index.jsx',
      },
      {
        path: '/antd/message',
        name: 'message',
        component: './antd/message/index.jsx',
      },
      {
        path: '/antd/tree',
        name: 'message',
        component: './antd/tree/index.jsx',
      },
    ],
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
    ],
  },
  // css3
  {
    path: '/css3',
    name: 'css3',
    layout: false,
    hideInMenu: true,
    routes: [
      {
        path: '/css3/index',
        name: 'index',
        component: './css3/index.jsx',
      },
    ],
  },
  {
    component: './404',
  },
];
