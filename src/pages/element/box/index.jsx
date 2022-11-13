import React, { useState } from 'react';
import { Button, Tabs } from 'antd';
import Box1 from './box-style-1/index'
import Box2 from './box-style-2/index'
import './index.less';

const InteractItem = (props) => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="盒子1" key="1">
          <Box1 />
        </Tabs.TabPane>
        <Tabs.TabPane tab="盒子2" key="2">
          <Box2 />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default InteractItem;
