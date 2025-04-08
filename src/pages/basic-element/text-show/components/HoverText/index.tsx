import React from "react";
import "./index.less";
import { Tooltip } from "antd";
interface LimitType {
  type: "length" | "line";
  maxLength?: number;
  maxLine?: number;
}

interface IProps {
  text: string;
  lines?: number;
  limitType?: LimitType;
  showTip?: boolean;
}

export default function HoverText(props: IProps) {
  const { text, limitType, lines, showTip = false } = props;

  const content = (
    <div
      className="hoverText"
      style={
        {
          "--lines": lines,
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  );

  if (showTip) {
    return <Tooltip title={text}>{content}</Tooltip>;
  }

  return content;
}
