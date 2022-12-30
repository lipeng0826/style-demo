import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.less';

const InputComp = (props) => {
  return (
    <div id="button-comp">
      <div style={{ width: 200 }}>
        {/*  */}
        <hr />
        <span>没有增加任何样式的button按钮</span>
        <br />
        <button>111</button>
        <hr />
        <span>antd加了样式的按钮</span>
        <br />
        <Button>111</Button>
        <Button type="primary">111</Button>
        <hr />
        <span>加个icon</span>
        <br />
        <Button type="primary">
          <PlusOutlined />
          111
        </Button>
      </div>
    </div>
  );
};

export default InputComp;
