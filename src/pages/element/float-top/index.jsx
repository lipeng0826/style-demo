import React, { useState } from 'react';
import { Input } from 'antd';
import Info from '@/components/Info/index';
import './index.less';

const TextArea = Input.TextArea;

const App = (props) => {
  return (
    <div className="element-float-top">
      <Info style={{marginBottom: 100 }}>
        <div>
          这个代码的功能是给一个固定的文本域上面固定一个浮动区域；
          <div>这个浮动区域距离下面的距离是固定的，宽度也和下面一致</div>
        </div>
        <div>
          实现思路：
            1.上面的内容是绝对定位的，但是它的位置收到下面位置的影响，<br />
            2.所以我们需要给这个浮动区域设置一个和下面联动的父级元素；<br />
            3.这个父级元素使用相对定位，这样浮动区域就可以相对于这个父级元素进行定位<br />
            让它垂直方向上的位置使用bottom控制，就可以相对父容器进行定位，产生了足够的关联关系，就可以保持固定了；<br />
        </div>
      </Info>
      <div style={{ width: 500 }}>
        <div className="container">
          {/* 浮动区域 */}
          <div className="floating-content">
            浮动区域的内容 {/* 这里你可以添加动态的内容，比如选项、提示等 */}
          </div>
          {/* TextArea */}
          <TextArea className="custom-textarea" />
        </div>
      </div>
    </div>
  );
};

export default App;
