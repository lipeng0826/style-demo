export default [
  {
    path: '/',
    name: 'index',
    component: './Welcome',
    layout: false,
    hideInMenu: true,
  },
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
    component: './404',
  },
];
