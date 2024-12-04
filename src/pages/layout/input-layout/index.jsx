import React, { useState } from 'react';
import { Form, Select, Button, Input, DatePicker } from 'antd';
import Info from '@/components/Info/index';
import HighLight from '@/components/HighLight/index.tsx';
import './index.less';

const { TextArea } = Input

const InteractTemplate = () => {
  return (
    <div id='input-layout-1'>
      <Info>
        <h2>输入域在自定义区域，自动增长</h2>
        <p>
          1111
        </p>
      </Info>
      <div className="footer">
          <div className="operatePop">
            <Button>重做/撤回</Button>
          </div>
          <div className="draw-control">
            <Button>11</Button>
            <Button>22</Button>
            <div style={{ width: 237 }}></div>
            <TextArea
              maxLength={100}
              className="textarea"
              style={{
                width: 220,
                marginLeft: 7,
                marginRight: 10,
              }}
              autoSize={{ minRows: 1, maxRows: 2 }}
              placeholder="选择要重绘的区域并描述要求"
              // value={'选择要重绘的区域并描述要求选择要重绘的区域并描述要求选择要重绘的区域并描述要求'}
              />
            <Button type="primary">
            重绘
            </Button>
          </div>
          {/* <Popover content={<div>111</div>} title={null} trigger="click">

          </Popover> */}
          <Button
            color="default"
            variant="filled"
            style={{ width: 60, justifySelf: "end" }}
          >
            应用
          </Button>
        </div>
    </div>
  );
};

export default InteractTemplate;
