import React, { useState, useEffect } from 'react';
import './index.less';
const Drop = (props) => {
  const allowDrop = (ev) => {
    ev.preventDefault();
  };
  const drag = (ev) => {
    ev.dataTransfer.setData('Text', ev.target.id);
  };
  const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('Text');
    ev.target.appendChild(document.getElementById(data));
  };

  return (
    // TODO:  code has problem
    <div id="drop">
      <p>拖动 RUNOOB.COM 图片到矩形框中:</p>
      <div id="div1" onDrop={drop} onDragOver={allowDrop} />
      <br />
      <img
        id="drag1"
        src="https://www.runoob.com/images/logo.png"
        draggable="true"
        onDragStart={drag}
        width="336"
        height="69"
      />
      <br />
    </div>
  );
};

export default Drop;
