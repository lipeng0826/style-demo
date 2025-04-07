import React, { useState } from 'react';
import { Tabs } from 'antd';
import Box1 from './box-style-1/index'
import Box2 from './box-style-2/index'
import Box3 from './box-style-3/index'
import Box4 from './box-style-4/index'
import Box5 from './box-style-5/index'

const InteractItem = () => {
  const items = [
    { label: '盒子1', key: '1', children: <Box1 /> },
    { label: '盒子2', key: '2', children: <Box2 /> },
    { label: '盒子3', key: '3', children: <Box3 /> },
    { label: '盒子4', key: '4', children: <Box4 /> },
    { label: '盒子5', key: '5', children: <Box5 /> },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="4" items={items} />
    </div>
  );
};

export default InteractItem;
