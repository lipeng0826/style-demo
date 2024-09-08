# STYLE-DEMO

## https 启动报错

在命令中增加了`NODE_OPTIONS=--openssl-legacy-provider`

    ```shell
    "start": "cross-env UMI_ENV=dev NODE_OPTIONS=--openssl-legacy-provider umi dev",
    ```

    当前的node版本：20.14.0
