# STYLE-DEMO

## https 启动报错

在命令中增加了`NODE_OPTIONS=--openssl-legacy-provider`

    ```shell
    "start": "cross-env UMI_ENV=dev NODE_OPTIONS=--openssl-legacy-provider umi dev",
    ```

    当前的node版本：20.14.0

## 升级到最新版umi

    主要是老版本不知道如何支持使用自己的路由入口

## 配置路由的方式

    1.到根目录下的.umirc.ts 中增加路由配置
    2.到对应目录增加文件
    2.到layouts/welcome.tsx中增加跳转链接
