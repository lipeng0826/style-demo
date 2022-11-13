import React from 'react';
import './Welcome.less'
import { Link } from 'umi';


const Welcome: React.FC = () => {

  return (
    <div className='description'>
      <div>样式展示概览：</div>
      <div>
        <div>布局相关</div>
        <div>
          <Link to="/layout/multiple-column-center">多列布局（mulitple-column-center）</Link>
        </div>
      </div>
      <div>
        <div>组件相关</div>
        <div>
          <Link to="/element/scroll">滚动条样式(scroll-bar)</Link>
        </div>
        <div>
          <Link to="/element/box">一个盒子样式(box)</Link>
        </div>
      </div>
      <div>antd相关</div>
    </div>
  );
};

export default Welcome;
