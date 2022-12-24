import React, { useState } from 'react';
import { Form, Select, Button, Input, DatePicker } from 'antd';
import './index.less';

const { RangePicker } = DatePicker;

const InteractTemplate = () => {
  return (
    <div>
      <div>
        <span>
          说明：这个方案是利用
          <span>1.按钮flex：1;占据剩余空间，右浮</span>
          <span>2.然后日历选择期flex:1动态长度，占据剩余空间，</span>
          <span>3（1）.父级设置display:flex,可以让内容的最大宽度为子元素的宽度</span>
          <span>3（2）.设置一个最大宽度，防止右浮超出内容区,这个稍微low一些</span>
        </span>
      </div>
      <div id="input-layout-container">
        <div id="input-layout">
          <Input style={{ width: 120 }} placeholder="互动id" />
          <Input style={{ width: 120 }} placeholder="互动名称" />
          <Input style={{ width: 120 }} placeholder="创建人邮箱" />
          <RangePicker style={{ width: 214 }} showTime />
          <Select
            style={{
              width: 120,
            }}
          />
          <Select
            style={{
              width: 120,
            }}
          />
          <div className="search-button">
            <Button type="primary">搜索</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractTemplate;
