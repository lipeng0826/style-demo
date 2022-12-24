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
          <span>按钮flex：1;占据剩余空间，</span>
          <span>然后日历选择期动态长度，占据剩余空间，</span>
          <span>然后使用媒体查询，长度太长的时候左浮</span>
        </span>
      </div>
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
  );
};

export default InteractTemplate;
