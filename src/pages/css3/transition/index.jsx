import React, { useState } from 'react';
import HighLight from '@/components/HighLight/index.tsx';
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
      <div className="content" />
      <div>{HighLight.cssCode('transform: translate(30px, 20px);')}</div>
      <hr />
      <div>2.rotate</div>
      <div className="content2" />
      <div className="content" />
      {HighLight.cssCode('transform: rotate(30deg);')}
      <hr />
      <div>3.scale</div>
      <div className="content3" />
      <div className="content" />
      {HighLight.cssCode('transform: scale(0.8, 0.6);')}
      <hr />
      <div>4.skew</div>
      <div className="content4" />
      <div className="content" />
      {HighLight.cssCode('transform: skew(30deg, 20deg);')}
      <hr />
      <div>5.matrix</div>
      <div>matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。</div>
      {/* <div className="title">3D转换</div>
      {HighLight.cssCode('transform: skew(30deg, 20deg);')} */}
      <div>1.rotateX</div>
      <div className="content6">李鹏是个大帅哥李鹏是个大帅哥李鹏是个大帅哥</div>
      <div className="content" />
      {HighLight.cssCode('transform: rotateX(60deg);')}
    </div>
  );
};

export default Transition;
