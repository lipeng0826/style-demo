import React, { useState } from 'react';
import { Button } from 'antd';
import Info from '@/components/Info/index';
import { CaretUpOutlined } from '@ant-design/icons';
import './index.less';

const CardItem1 = (props) => {
  return (
    <>
      <Info>
        使用flex的两列布局
      </Info>
      <div className={`card-item2 ${props.classNameNameName || ''}`}>
        <span className='icon'>
          <CaretUpOutlined />
        </span>
        <div className='modal'>
          {/* <!-- 左侧部分 --> */}
          <div className="column" style={{ marginRight: 20 }}>
            <div className="grid-item">
              <div className="label">画面描述</div>
              <div className="value">玛利欧蹲下身，专注地看着地面，手持报纸，露出紧张神情</div>
            </div>
            <div className="grid-item">
              <div className="label">场景描述</div>
              <div className="value">车站边静谧的地面，灰尘飞舞，报纸堆积</div>
            </div>
            <div className="grid-item">
              <div className="label">景别</div>
              <div className="value">近景</div>
            </div>
            <div className="grid-item">
              <div className="label">剧间时间</div>
              <div className="value">傍晚</div>
            </div>
          </div>

          {/* <!-- 右侧部分 --> */}
          <div className="column" style={{ marginLeft: 20 }}>
            <div className="grid-item">
              <div className="label">地点</div>
              <div className="value">车站边的地面</div>
            </div>
            <div className="grid-item">
              <div className="label">角色动作</div>
              <div className="value">玛利欧静候</div>
            </div>
            <div className="grid-item">
              <div className="label">镜头运动</div>
              <div className="value">固定</div>
            </div>
            <div className="grid-item">
              <div className="label">占用时间</div>
              <div className="value">10秒</div>
            </div>
            <div className="grid-item">
              <div className="label">旁白</div>
              <div className="value">那声音是从那堆废报纸和煤灰中间传出来的。</div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default CardItem1;
