# Ant Design Pro

This project is initialized with [Ant Design Pro](https://pro.ant.design). Follow is the quick guide for how to use.

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).

## 启动项目

npm run start（mock）  
npm run start:dev(无 mock)

## 打包

npm run build
思路：

​ 1.动作：搭建1个基本的样式库 + 样式demo
​ 2.目的：
​  1.自己的老代码留痕
​  2.便于其他开发的时候可以借鉴和使用
​  3.便于总结提升
​  4.antd 的魔改方案汇总，毕竟自己总是会和antd打交道，通过这种方式总结antd修改的方案和思路
​ 3.问题
​  1.它和直接在项目中使用copy代码有什么优点呢？
​  就是怕忘了，自己直接能访问
​  2.会不会比较浪费时间?
​  相对而言是比较消耗时间，毕竟需要总结代码
​  3.后期维护怎么办？
​  后期维护：页面本身是千奇百怪的，这只是总结了一些方案，并不能总结所有的方案，而且维护应该是很低频的
​  4.是否会出现无限收集的问题？是个东西都想总结到自己的项目里？
​  这种情况显然是有问题的，那这个项目也太大了，而且如果内容太膨胀了，意义就没了
​  或者是如果非常小的点都总结，那也会导致项目过快膨胀，耽误时间，所以总结的东西应该有这么几个点：
​  1.在b端项目中会使用的
​  2.自己实际开发过的，遇到问题的，直接照抄别人的不行
​  3.代码有一定的工作量的（或者是简单内容的堆砌），这样方便提效
​  4.有一定的难度的，太简单就直接写了
​ 3.整个计划：
​  1.项目搭建
​  2.引入样式
​  3.开发demo
​  4.打包好放到自己的nginx服务器，便于直接查看
​ 4.动作：
​  1.项目搭建
​   使用技术栈：
​    1.直接使用interact-web，然后删除不用代码(1h)
​  2.引入第一个组件
​  3.引入第一个布局
结论：
​ 还是比较有价值的，但是这个大杂烩还是比较费时间的，并且要经常维护
