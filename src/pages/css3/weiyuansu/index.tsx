import React, { useState } from 'react';
import Style from './index.module.less';
import Info from '@/components/Info';

enum StatusEnum {
  Turbo = "极速模式",
  Fast = "快速模式",
  Relaxed = "龟速模式",
  Exception = "token异常",
  Disabled = "已停用",
}

const list = [
  {
    id: 1,
    status: "Turbo",
  },
  {
    id: 2,
    status: "Fast",
  },
  {
    id: 3,
    status: "Relaxed",
  },
  {
    id: 4,
    status: "Exception",
  },
  {
    id: 5,
    status: "Disabled",
  },
];

const WeiYuanSu = () => {
  return (
      <>
        <div>
          <Info>
            伪元素
            <p>::before等，可以通过位置调整位置</p>
            <p>这里通过参数修改span的class，然后控制的icon颜色</p>
          </Info>
        </div>
        <div id="icon">
          {list.map((item) => {
            return (
              <div key={item.id} className={Style['status-style']}>
                <span className={item.status}>
                  {StatusEnum[item.status as  keyof typeof StatusEnum]}
                </span>
              </div>
            );
          })}
        </div>
      </>
  );
};

export default WeiYuanSu;
