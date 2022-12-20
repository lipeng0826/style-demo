import React, { useState } from 'react';
import { Form, Select, Button, Input, DatePicker } from 'antd';
import './index.less';

const { RangePicker } = DatePicker;

const InteractTemplate = () => {
  return (
    <div className="filter">
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
        <Button type="primary" style={{ width: 52, fontWeight: 700 }}>
          搜索
        </Button>
      </div>
    </div>
  );
};

export default InteractTemplate;
