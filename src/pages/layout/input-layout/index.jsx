import React, { useState } from 'react';
import { Form, Select, Button, Input, DatePicker } from 'antd';
import Info from '@/components/Info/index';
import HighLight from '@/components/HighLight/index.tsx';
import './index.less';

const { RangePicker } = DatePicker;

const InteractTemplate = () => {
  return (
    <div>
      <Info>
        <h2>表单输入</h2>
        <p>
          <span>
            说明：这个方案是利用
            <br />
            <span>1.按钮flex：1;占据剩余空间，右浮</span>
            <br />
            <span>2.然后日历选择期flex:1动态长度，占据剩余空间，</span>
            <br />
            <span>
              3（1）.父级设置display:flex,可以让内容的最大宽度为子元素的宽度(flex-grow默认值是0，不占用多余空间)
            </span>
            <br />
            <span>3（2）.设置一个最大宽度，防止右浮超出内容区,这个稍微low一些</span>
            <br />
          </span>
        </p>
      </Info>
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
      <div>
        <span>第二种情况：如果所有的内容是固定宽度的</span>
      </div>
      <div id="input-layout-container2">
        <div id="input-layout2">
          <Input style={{ width: 120 }} placeholder="互动id" />
          <Input style={{ width: 120 }} placeholder="互动名称" />
          <Input style={{ width: 120 }} placeholder="创建人邮箱" />
          <Input style={{ width: 120 }} placeholder="日期" />
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
