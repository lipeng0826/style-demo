import Info from "@/components/Info/index";
import styles from "./basicUse.module.less";
import HoverText from "./HoverText";
import { Tooltip } from "antd";

export default function TextShow() {
  return (
    <div>
      <Info>
        文件效果展示
        <p>
          在前端开发中，涉及到的文字展示非常多，而且有很多常见的，需要系统总结的场景
        </p>
        <p>这里总结了几个常见的场景，并给出了对应的解决方案</p>
        <p>1.文件单行省略</p>
        <p>2.文件多行省略</p>
        <p>3.文件单行省略+hover展示全部</p>
        <p>4.文件多行省略+hover展示全部</p>
      </Info>
      <div className={styles.container}>
        <div>
          <p>1.文件单行省略</p>
          <div className={styles.singleLineEllipsis}>
            <p>今天吃饭了吗？</p>
          </div>
          <HoverText
            text="今天吃饭了吗？"
            line={1}
            limitType={{ type: "length", maxLength: 20 }}
          />
        </div>
        <div>
          <p>2.文件多行省略</p>
          <div className={styles.multiLineEllipsis}>
            <p>今天吃饭了吗？我今天没吃饭</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <p>3.文件单行省略+hover展示全部</p>
          <div className={styles.singleLineEllipsis}>
            <p>
              <Tooltip title="今天吃饭了吗？">
                <span>今天吃饭了吗？</span>
              </Tooltip>
            </p>
          </div>
        </div>
        <div>
          <p>4.文件多行省略+hover展示全部</p>
          <div className={styles.multiLineEllipsis}>
            <p>
              <Tooltip title="今天吃饭了吗？我今天没吃饭">
                <span>今天吃饭了吗？我今天没吃饭</span>
              </Tooltip>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
