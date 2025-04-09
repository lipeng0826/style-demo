import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';

import './index.less'
/**
 * 参考链接：
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar
 * 鼠标hover上去才出现滚动条
 * https://www.imooc.com/article/326522/
 * 修改滚动条样式
 * https://blog.csdn.net/coder_jxd/article/details/124213962
 * 
 * 在滚动的元素上增加对滚动的修改
 * 
 */

const InteractGameItem = (props) => {
  return (
    <div className="element-scroll">
      <div className="container1">
        <div>默认滚动条</div>
        <div>默认滚动条是会有滚动的时候才显示滚动条</div>
        <div>不滚动不显示滚动条的</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
      </div>
      <div className="container2">
        <div>修改滚动条样式</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
      </div>
      <div className="container3">
        <div>hover上才有滚动条样式</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
      </div>
    </div>
  );
};

export default InteractGameItem;
