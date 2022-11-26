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
          <Link to="/layout/pageLevel/top-middle-bottom">上中下布局</Link>
        </div>
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
          <Link to="/element/box">盒子样式(box)</Link>
        </div>
        <div>
          <Link to="/element/mul-columns-dot">多列省略布局</Link>
        </div>
      </div>
      <div>antd相关</div>
      <div>
        <Link to="/antd/message">覆盖message样式(scroll-bar)</Link>
      </div>
      <div>
        <div>小样式</div>
        <div>
          <Link to="/small-style/index">入口</Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
