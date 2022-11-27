import React, { useState } from 'react';
import { Tabs } from 'antd';
import './index.less';
import WeiYuanSu from './weiyuansu';
import Transition from './transition';
import Mask from './mask';
import Juzhong from './juzhong';
import Canvas from './canvas';
import DesignAlert from './designAlert';
import Drop from './drop';

const Css3 = (props) => {
  const [tabValue, setTabValue] = useState('weiyuansu');

  return (
    <div>
      <div>
        <Tabs value="tabValue" onChange={setTabValue}>
          <Tabs.TabPane tab="伪元素" key="weiyuansu" />
          <Tabs.TabPane tab="Transition" key="transition" />
          <Tabs.TabPane tab="mask" key="Mask" />
          <Tabs.TabPane tab="居中" key="Juzhong" />
          <Tabs.TabPane tab="Canvas" key="Canvas" />
          <Tabs.TabPane tab="DesignAlert" key="DesignAlert" />
          <Tabs.TabPane tab="Drop" key="Drop" />
        </Tabs>
      </div>
      <div>
        {tabValue === 'weiyuansu' && <WeiYuanSu />}
        {tabValue === 'transition' && <Transition />}
        {tabValue === 'Mask' && <Mask />}
        {tabValue === 'Juzhong' && <Juzhong />}
        {tabValue === 'Canvas' && <Canvas />}
        {tabValue === 'DesignAlert' && <DesignAlert />}
        {tabValue === 'Drop' && <Drop />}
      </div>
    </div>
  );
};

export default Css3;
