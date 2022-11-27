import React, { useState } from 'react';
import './index.less';
const Mask = (props) => {
  return (
    <div id="mask">
      <div className="content">
        <div className="mark" />
        我是内容 ***** 我是内容 *****
      </div>
    </div>
  );
};

export default Mask;
