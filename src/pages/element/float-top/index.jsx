import React, { useState } from 'react';
import { Input } from 'antd';
import Info from '@/components/Info/index';
import './index.less';

const TextArea = Input.TextArea;

const App = (props) => {
  return (
    <div className="element-float-top">
      <Info style={{marginBottom: 100 }}>
        <div style={{ fontSize: 18}}>
          这个代码的功能是给一个固定的输入框上面增加一个浮动区域；
          <div>这个浮动区域距离下面的距离是固定的，宽度也和下面一致</div>
        </div>
        <h1 />
        <div>
          实现思路：<br />
            1.页面的默认布局是流式布局<br />
            2.所以如果要给一个区域上面增加一个固定间隔的弹出区域，可以使用流式布局（默认布局）固定这个元素的位置<br />
            3.然后在这个元素里使用绝对定位，bottom为0<br />
            4.这样就实现了一个在一个区域里固定位置显示一个元素<br />
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
      <Info style={{marginBottom: 100 }}>
        <div style={{ fontSize: 18}}>
          产生一个不占据空间的，但是固定位置的区域
        </div>
        <h1 />
        <div>
          实现思路：<br />
            1.和上面一样，页面的默认布局是流式布局<br />
            2.绝对定位的元素不占据区域<br />
            3.给它的父级使用流式布局，就可以产生一个默认布局的区域<br />
            4.这样就实现了一个在一个区域里固定位置显示一个不占位置的元素<br />
        </div>
      </Info>
      <div style={{ width: 500 }}>
        <div className="area">
          {/* 固定定位区域 */}
          <div className="absolute-content">
            浮动区域的内容 {/* 这里你可以添加动态的内容，比如选项、提示等 */}
          </div>
          <div style={{marginLeft: 100}}>
            12121
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
