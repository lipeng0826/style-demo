import React, { useState } from 'react';
import { Tabs } from 'antd';
import './index.less';
import WeiYuanSu from './weiyuansu';
import Transition from './transition';
import Mask from './mask';
import Juzhong from './juzhong';
import Canvas from './canvas';
import Svg from './svg';
import Drop from './drop';
import Flex from './flex';
import Icon from './icon';
import HuanDengPian from './huan-deng-pic';
import MP from './m-p';
import Other from './other';

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
          <Tabs.TabPane tab="Svg" key="Svg" />
          <Tabs.TabPane tab="Drop" key="Drop" />
          <Tabs.TabPane tab="Flex" key="Flex" />
          <Tabs.TabPane tab="css图标" key="icon" />
          <Tabs.TabPane tab="幻灯片" key="HuanDengPian" />
          <Tabs.TabPane tab="未分类" key="other" />
        </Tabs>
      </div>
      <div>
        {tabValue === 'weiyuansu' && <WeiYuanSu />}
        {tabValue === 'transition' && <Transition />}
        {tabValue === 'Mask' && <Mask />}
        {tabValue === 'Juzhong' && <Juzhong />}
        {tabValue === 'Canvas' && <Canvas />}
        {tabValue === 'Svg' && <Svg />}
        {tabValue === 'Drop' && <Drop />}
        {tabValue === 'Flex' && <Flex />}
        {tabValue === 'icon' && <Icon />}
        {tabValue === 'HuanDengPian' && <HuanDengPian />}
        {tabValue === 'M-P' && <MP />}
        {tabValue === 'other' && <Other />}
      </div>
    </div>
  );
};

export default Css3;
