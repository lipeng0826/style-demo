import React, { useState } from 'react';
import { Tabs } from 'antd';
import Card1 from './card-style-1/index'
import Card2 from './card-style-2/index'

const InteractItem = () => {
  const items = [
    { label: 'Card1', key: '1', children: <Card1 /> },
    { label: 'Card2', key: '2', children: <Card2 /> },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="2" items={items} />
    </div>
  );
};

export default InteractItem;
