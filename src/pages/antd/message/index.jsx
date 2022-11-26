import React, { useState } from 'react';
import { Button, message } from 'antd';
import './index.less';

let timer;

const InteractItem = (props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    message.error('1111', 2);
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      setLoading(false);
    }, [15000]);
  };

  const removeLoading = () => {
    clearTimeout(timer);
    setLoading(false);
  };
  return (
    <div>
      <Button onClick={handleClick} loading={loading}>
        show Message
      </Button>
      <br />
      <Button onClick={removeLoading}>清除loading</Button>
    </div>
  );
};

export default InteractItem;
