import React, { useState } from 'react';
import { Tabs } from 'antd';
import './index.less';
import WeiYuanSu from './weiyuansu';
import Transition from './transition';
import Mask from './mask';
import Juzhong from './juzhong';

const Css3 = (props) => {
  const [tabValue, setTabValue] = useState('weiyuansu');

  return (
    <div>
      <div>
        <Tabs defaultActiveKey="1" value="tabValue" onChange={setTabValue}>
          <Tabs.TabPane tab="伪元素" key="weiyuansu" />
          <Tabs.TabPane tab="Transition" key="transition" />
          <Tabs.TabPane tab="mask" key="Mask" />
          <Tabs.TabPane tab="居中" key="Juzhong" />
        </Tabs>
      </div>
      <div>
        {tabValue === 'weiyuansu' && <WeiYuanSu />}
        {tabValue === 'transition' && <Transition />}
        {tabValue === 'Mask' && <Mask />}
        {tabValue === 'Juzhong' && <Juzhong />}
      </div>
    </div>
  );
};

export default Css3;
