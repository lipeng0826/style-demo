import React, { useState } from 'react';
import { Button } from 'antd';
import './index.less';

const ImgUrl = "https://q-fe.aixuexi.com/cloud/interact-game/1667790947488-7ae604d8c887:dxss2.png";
const InteractItem = (props) => {
  return (
    <div className="box-item">
      <div className="img">
        <img src={ImgUrl} />
        <div className="flag">
          <span className="topic-type">大显身手</span>
          <span className="module">模板</span>
        </div>
      </div>
      <div className="name">拖拽填空母版-拖拽填空母版-拖拽填空母版-拖拽填空母版</div>
      <div className="button">
        <Button type="link">编辑</Button>
        <Button type="link">复制</Button>
        <Button type="link">属性</Button>
        <Button type="link">发布</Button>
        <Button type="link">下架</Button>
      </div>
    </div>
  );
};

export default InteractItem;
