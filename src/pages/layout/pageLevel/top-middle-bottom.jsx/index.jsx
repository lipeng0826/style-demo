import React, { useEffect, useRef, useState } from 'react';
import { Steps, Button, message } from 'antd';
import { useLocation } from 'umi';
import { ArrowLeftOutlined } from '@ant-design/icons';
// 引入其他组件
import { First } from "../../mulitple-column-center/index.tsx"
import { getArray } from '@/utils/utils';


import './index.less';

const { Step } = Steps;
const CreateInteractGame = () => {
  const [current, setCurrent] = useState(0);

  const next = uri => {
    setCurrent(1);
    document.title = '编辑互动游戏'
  };

  const prev = uri => {
    setCurrent(0);
    document.title = '编辑互动属性'
  };

  return (
    // 父级元素，设置最小高度100vh
    <div className="create-interact-game">
        {/* 使用瀑布流，设置高度就可以 */}
      <div className="create-interact-game-header">
        {current === 0 ? (
          <div className="title">创建单题互动</div>
        ) : (
          <div className="title">
            <ArrowLeftOutlined onClick={prev} style={{ marginRight: 5 }} />
            编辑互动属性
          </div>
        )}
        <div className="steps">
          <Steps current={current} size="small">
            <Step title="编辑互动属性" />
            <Step title="编辑互动游戏" />
          </Steps>
        </div>
        {current === 0 ? (
          <span className='step-one-btn'>
            <Button className='save-btn' onClick={() => { next() }}>下一步</Button>
          </span>
        ) : (
          <span className='step-two-btn'>
          <Button className='save-btn' onClick={() => { prev() }}>发布</Button>
          </span>
        )}
      </div>
      <div className='create-interact-game-step1'>
        <div className='form'>
            <First dataList={getArray(40)} />
        </div>
        <div className="btn">
        <Button className='next-btn' onClick={() => { next() }} type="primary" >下一步</Button>
      </div>
      </div>
    </div>
  );
};

export default CreateInteractGame;
