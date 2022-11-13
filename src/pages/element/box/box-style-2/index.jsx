import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import './index.less';

/**
 *
 * TODO: 选中不应该修改里面内容的大小，加一个宽高100%的绝对定位覆盖层比较好
 *
 */

const ImgUrl = 'https://q-fe.aixuexi.com/cloud/interact-game/1667790947488-7ae604d8c887:dxss2.png';
const InteractItem = (props) => {

  const [selectId, setSelectId] = useState(undefined);
  return (
    <>
      <div>
        <div
          className={selectId === 1? 'item active' : 'item'}
          onClick={(value) => {
            setSelectId( selectId ? undefined:  1);
          }}
        >
          <img src={ImgUrl} />
          <div className="check-ctrl">
            <Checkbox className="check-btn" checked={selectId === 1} />
          </div>
        </div>
      </div>
      <div>
        <div
          className="item"
          onClick={(value) => {
            console.log(1111);
          }}
        >
          <img src={ImgUrl} />
          <div className="check-ctrl">
            <Checkbox className="check-btn" checked={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractItem;
