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
import Grid from './grid';
import Flex from './flex';
import Icon from './icon';
import HuanDengPian from './huan-deng-pic';
import MP from './m-p';
import Other from './other';

const Css3 = (props) => {
  const [tabValue, setTabValue] = useState('weiyuansu');

  // 将组件和标签页信息放入数组
  const tabComponents = [
    { key: 'weiyuansu', component: <WeiYuanSu />, tab: '伪元素' },
    { key: 'transition', component: <Transition />, tab: 'Transition' },
    { key: 'Mask', component: <Mask />, tab: 'mask' },
    { key: 'Juzhong', component: <Juzhong />, tab: '居中' },
    { key: 'Canvas', component: <Canvas />, tab: 'Canvas' },
    { key: 'Svg', component: <Svg />, tab: 'Svg' },
    { key: 'Drop', component: <Drop />, tab: 'Drop' },
    { key: 'Grid', component: <Grid />, tab: 'Grid' },
    { key: 'Flex', component: <Flex />, tab: 'Flex' },
    { key: 'icon', component: <Icon />, tab: 'css图标' },
    { key: 'HuanDengPian', component: <HuanDengPian />, tab: '幻灯片' },
    { key: 'M-P', component: <MP />, tab: 'M-P' },
    { key: 'other', component: <Other />, tab: '未分类' },
  ];

  return (
    <div>
      <div>
        <Tabs value={tabValue} onChange={setTabValue}>
          {/* 渲染标签页 */}
          {tabComponents.map((item) => (
            <Tabs.TabPane key={item.key} tab={item.tab} />
          ))}
        </Tabs>
      </div>
      <div>
        {/* 根据当前选中的标签页渲染对应的组件 */}
        {tabComponents.map((item) => tabValue === item.key && item.component)}
      </div>
    </div>
  );
};

export default Css3;
