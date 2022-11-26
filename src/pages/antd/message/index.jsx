import React, { useState } from 'react';
import { Button, message } from 'antd';
import './index.less';

const InteractItem = (props) => {

  const handleClick = () => {
    message.error('1111')
  }
  return (
    <div>
      <Button onClick={handleClick} >show Message</Button>
    </div>
  );
};

export default InteractItem;
