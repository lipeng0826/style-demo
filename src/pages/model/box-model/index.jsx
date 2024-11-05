import React, { useState, useEffect } from 'react';
import './index.less';
const Drop = (props) => {

  return (
    <div id="box-model">
      <h4>滚动的盒子</h4>
      <div className='container'>
        <div className='inner1'>
          这是一个盒子，子盒子的高度是100%；
          并且margin-bottom:20px;
          那么子节点超出了父容器的高度，会滚动；
        </div>
      </div>
      <h4>滚动的盒子2</h4>
      <div className='container'>
        <div className='inner2'>
          这是一个盒子，子盒子的高度是100%；
          并且padding-bottom:20px;
          那么子节点超出了父容器的高度，会滚动；
        </div>
      </div>
      <h4>不滚动的盒子</h4>
      <div className='container'>
        <div className='inner3'>
          这是一个盒子，子盒子的高度是100%；
          并且padding-bottom:20px;
          但是设置了box-sizing: border-box；
          那么子节点不会超出父节点的高度；
        </div>
      </div>
    </div>
  );
};

export default Drop;
