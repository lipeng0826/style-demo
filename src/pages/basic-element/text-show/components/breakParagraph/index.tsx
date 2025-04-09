import React from "react";
import styles from "./index.module.less";
import Info from "@/components/Info";

interface BreakParagraphProps {
  content: string;
  className?: string;
}

const BreakParagraph: React.FC<BreakParagraphProps> = ({
  content,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className || ""}`}>{content}</div>
  );
};

// 使用示例
const Demo = () => {
  return (
    <div>
      <Info>
        <h3>这个只是一个思路，后续内容还需要再添加</h3>
      </Info>
      <h3>基本使用：</h3>
      <BreakParagraph content="这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本这是一个非常长的测试文本" />

      <h3>基本使用：</h3>
      <BreakParagraph content="222222222323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323" />

      <h3>带样式的使用：</h3>
      <BreakParagraph
        content="abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg"
        className={styles.customStyle}
      />
    </div>
  );
};

export default Demo;
