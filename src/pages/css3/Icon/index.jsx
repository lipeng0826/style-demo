import React, { useState } from 'react';
import './index.less';

export const Circle = () => {
  return (
    <div>
      <h1>圆点</h1>
      <div>
        <span className="circle">未发布</span>
      </div>
    </div>
  );
};

const Icon = (props) => {
  return (
    <div id="icon">
      <Circle />
    </div>
  );
};

export default Icon;
