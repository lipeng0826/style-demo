import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';

import './index.less';

const SmallStyle = (props) => {
  return <div className="small-style-wrapper">
    <div>单行省略： 参见element-盒子样式(box)模块</div>
    <div>多行省略： 参见element-盒子样式(box)模块</div>
    <div>1px：</div>
    <div>伪元素：</div>
  </div>;
};

export default SmallStyle;
