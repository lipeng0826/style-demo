import { useEffect, useRef } from "react";
import { Button } from "antd";
import Info from "@/components/Info/index";
import Styles from "./index.module.less";

const SmallStyle = (props) => {
  return (
    <div>
      <Info>
        <div>支持在一个固定宽高的容器中自适应展示图片的逻辑</div>
        <p>object-fit: contain; /* 让图片保持比例缩放，完整显示 */</p>
      </Info>
      <div className={Styles['preview']}>
        <img src="https://ai-tool-static-test.ledupeiyou.com/mjImage/278e974e-284a-4b5d-9bbf-8c238db5aa5e.png"></img>
      </div>
    </div>
  );
};

export default SmallStyle;
