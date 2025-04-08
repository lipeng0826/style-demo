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
        <p>5.文件多行省略+hover展示全部</p>
        <p>如果要使用这个组件的话，最好的方式是直接引用，要修改里面的样式，可以通过控制class名为hoverText的样式控制</p>
      </Info>
      <div className={styles.container}>
        <div>
          <p>1.文件单行省略</p>
          <div style={{ width: "100px", backgroundColor: "#f0f0f0" }}>
            <HoverText text="今天吃饭了吗？" lines={1} />
          </div>
        </div>
        <div>
          <p>2.文件多行省略</p>
          <div style={{ width: "100px", backgroundColor: "#f0f0f0" }}>
            <HoverText text="今天吃饭了吗？我今天没吃饭" lines={2} />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <p>3.文件单行省略+hover展示全部</p>
          <div style={{ width: "100px", backgroundColor: "#f0f0f0" }}>
            <HoverText text="今天吃饭了吗？" lines={1} showTip />
          </div>
        </div>
        <div>
          <p>4.文件多行省略+hover展示全部</p>
          <div style={{ width: "100px", backgroundColor: "#f0f0f0" }}>
            <HoverText text="今天吃饭了吗？我今天没吃饭" lines={2} showTip />
          </div>
        </div>
        <div>
          <p>5.文件多行省略+hover展示全部</p>
          <div style={{ width: "100px", backgroundColor: "#f0f0f0" }}>
            <HoverText text="今天吃饭了吗？我今天没吃饭今天吃饭了吗？我今天没吃饭今天吃饭了吗？我今天没吃饭今天吃饭了吗？我今天没吃饭" lines={5} showTip />
          </div>
        </div>
        <div>
          <p>6.固定高度省略(知道高度，知道行高，直接计算有几行就ok)</p>
          <div style={{ width: "100px", height: "110px", backgroundColor: "#f0f0f0" }}>
            <HoverText text="今天吃饭了吗？我今天没吃饭今天吃饭了吗？今天吃饭了吗？我今天没吃饭今天吃饭了吗？" showTip lines={ 110 / 22} />
          </div>
        </div>
      </div>
    </div>
  );
}
