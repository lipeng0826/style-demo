import React, { useState, useEffect } from 'react';
import './index.less';
const Flex = (props) => {
  return (
    <div id="flex">
      {/* <!--一个点--> */}
      <div className="demo1 demo">
        <span className="item" />
      </div>

      <div className="demo2 demo">
        <span className="item" />
      </div>

      <div className="demo3 demo">
        <span className="item" />
      </div>

      <div className="demo4 demo">
        <span className="item" />
      </div>

      <div className="demo5 demo">
        <span className="item" />
      </div>

      <div className="demo6 demo">
        <span className="item" />
      </div>

      <div className="demo7 demo">
        <span className="item" />
      </div>

      <div className="demo8 demo">
        <span className="item" />
      </div>

      <div className="demo9 demo">
        <span className="item" />
      </div>

      {/* <!--两个点--> */}
      <div className="demo11 demo">
        <span className="item" />
        <span className="item" />
      </div>

      <div className="demo12 demo">
        <span className="item" />
        <span className="item" />
      </div>

      <div className="demo13 demo">
        <span className="item" />
        <span className="item" />
      </div>

      <div className="demo14 demo">
        <span className="item" />
        <span className="item" />
      </div>

      <div className="demo15 demo">
        <span className="item" />
        <span className="item " />
      </div>

      <div className="demo16 demo">
        <span className="item" />
        <span className="item" />
      </div>

      {/* <!--3个项目--> */}
      <div className="demo21 demo">
        <span className="item" />
        <span className="item" />
        <span className="item" />
      </div>

      {/* <!--4个项目--> */}
      <div className="demo31 demo">
        <span className="item" />
        <span className="item" />
        <span className="item" />
        <span className="item" />
      </div>

      <div className="demo32 demo">
        <span className="item" />
        <span className="item" />
        <span className="item" />
        <span className="item" />
      </div>

      {/* <!--5个项目--> */}
      <div className="demo32 demo">
        <span className="item" />
        <span className="item" />
        <span className="item" />
        <span className="item" />
        <span className="item" />
      </div>
    </div>
  );
};

export default Flex;
