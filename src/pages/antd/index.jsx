import React, { useState } from 'react';
import { Link } from 'umi';

const InteractItem = (props) => {
  return (
    <div>
      <div>
        <Link to="/antd/message">覆盖message样式(scroll-bar)</Link>
      </div>
      <div>
        <Link to="/antd/input">input</Link>
      </div>
      <div>
        <Link to="/antd/tree">tree</Link>
      </div>
      <div>
        <Link to="/antd/select">select</Link>
      </div>
      <div>
        <Link to="/antd/modal">modal</Link>
      </div>
    </div>
  );
};

export default InteractItem;
