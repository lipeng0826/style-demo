import React, { useState } from 'react';
import './index.less';
const Transition = (props) => {
  return (
    <div id="transition">
      <div className="title">过度</div>
      <div className="guodu" />
      <hr />
      <div className="title">2D转换</div>
      <div>1.translate</div>
      <div className="content1" />
      <div className="content2" />
      <hr />
      <div>2.rotate</div>
      <div className="content3" />
      <div className="content2" />
      <hr />
      <div>3.scale</div>
      <div className="content4" />
      <div className="content2" />
      <hr />
      <div>4.skew</div>
      <div className="content5" />
      <div className="content2" />
      <hr />
      <div>5.matrix</div>
      <div>matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。</div>
      <div className="title">3D转换</div>
      <div>1.rotateX</div>
      <div className="content6">李鹏是个大帅哥李鹏是个大帅哥李鹏是个大帅哥</div>
      <div className="content2" />
    </div>
  );
};

export default Transition;
