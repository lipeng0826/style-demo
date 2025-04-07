import React from "react";
import styles from "./index.module.less";

interface LimitType {
  type: "length" | "line";
  maxLength?: number;
  maxLine?: number;
}

interface IProps {
  text: string;
  line: number;
  limitType: LimitType;
}

export default function HoverText(props: IProps) {
  const { text, line, limitType } = props;

  if (limitType.type === "length") {
    return <div className={styles.hoverText}>HoverText</div>;
  }

  return <div className={styles.hoverText}>HoverText</div>;
}
