import { Tooltip } from "antd";
import Info from "@/components/Info/index";
import { truncateFileName } from "@/utils/utils";
import styles from "./FileTextView.module.less";

// JS方案组件
const JSFileTextView = (props: { text: string; maxLength?: number }) => {
  const { text, maxLength = 10 } = props;
  if (text.length > maxLength) {
    return (
      <div>
        <Tooltip title={text}>
          <span>{truncateFileName(text, maxLength)}</span>
        </Tooltip>
      </div>
    );
  }
  return text;
};

// CSS方案组件
const CSSFileTextView = (props: { text: string }) => {
  const { text } = props;
  const [name, ext] = text.split(".");

  return (
    <div className={styles.middleEllipsis}>
      <Tooltip title={text}>
        <div>
          <span className={styles.filename}>{name}</span>
          <span className={styles.extension}>.{ext}</span>
        </div>
      </Tooltip>
    </div>
  );
};

export default function TextShow() {
  return (
    <div>
      <Info style={{}}>
        <p>这些方案有一个共同的点，就是</p>
        <p>js方案：
            利用js截取字符串，然后通过Tooltip展示全部内容<br/>
            无法固定宽度，而是通过截取之后的宽度来展示，是不定宽方案<br/>
        </p>
        <p>css方案：利用css的伪元素，计算文件名和扩展名的长度，然后通过伪元素来展示,这里的问题是扩展名的宽度是固定的，比如固定30px,无法很好兼容3位和4位的扩展名</p>
      </Info>
      <div style={{ marginLeft: 24 }}>
        <div>
          <p>JS实现方案</p>
          <JSFileTextView text="1111233333.png" maxLength={10} />
        </div>
        <div>
          <p>CSS实现方案</p>
          <CSSFileTextView text="1111233333.jpg" />
        </div>
      </div>
    </div>
  );
}
