import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import './index.less';
import WeiYuanSu from './weiyuansu';
import Transition from './transition';
import Animation from './animation';
import Mask from './mask';
import Juzhong from './juzhong';
import Canvas from './canvas';
import Svg from './svg';
import Drop from './drop';
import Grid from './grid';
import Flex from './flex';
import Icon from './Icon';
import HuanDengPian from './huan-deng-pic';
import MP from './m-p';
import OnePX from './onePX';
import Other from './other';
import Common from './common';
const key = 'style-demo-css3-tabValue';

const Css3 = (props) => {
  const [tabValue, setTabValue] = useState(undefined);

  useEffect(() => {
    const current = localStorage.getItem(key);

    if (current) {
      console.log('lipeng-🚀- ~ useEffect ~ current:', current);
      setTabValue(current);
    }
  }, []);

  const updateTabValue = (value) => {
    localStorage.setItem(key, '' + value);
    setTabValue(value);
  };

  // 将组件和标签页信息放入数组
  const tabComponents = [
    { key: 'weiyuansu', component: <WeiYuanSu />, tab: '伪元素' },
    { key: 'OnePX', component: <OnePX />, tab: '1px' },
    { key: 'transition', component: <Transition />, tab: 'Transition' },
    { key: 'animation', component: <Animation />, tab: 'Animation' },
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
    { key: 'common', component: <Common />, tab: '一些基本的通用样式' },
    { key: 'other', component: <Other />, tab: '未分类' },
  ];

  return (
    <div>
      <div>
        <Tabs activeKey={tabValue} onChange={updateTabValue}>
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
