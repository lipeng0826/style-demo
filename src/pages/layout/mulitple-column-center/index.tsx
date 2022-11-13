import React, { useState } from 'react';
import { Tabs } from 'antd';
import Box from '@/pages/element/box/box-style-1/index.jsx';
import './index.less';
import { getArray } from '@/utils/utils';

const dataList = getArray(20);

function First(props: { dataList: Number[] }) {
  return (
    <div className="multiple-column-center1">
      {props.dataList.map((item) => (
        // class用来让盒子宽度100%,正常这个一般都写到子组件上了
        <Box className="first-box-item" key={item} />
      ))}
    </div>
  )
}


function Second(props: { dataList: Number[] }) {
  return (
    <div className="multiple-column-center2">
      {props.dataList.map((item) => (
       <div className='box-item-wrapper'>
         <Box key={item} />
       </div>
      ))}
    </div>
  )
}

function Third(props: { dataList: Number[] }) {
  return (
    <div className="multiple-column-center3">
      {props.dataList.map((item) => (
        <Box key={item} />
      ))}
    </div>
  )
}

const InteractGameItem = (props: any) => {
  return (
    <div style={{paddingTop: 30}}>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="第一种方案" key="1">
          <First dataList={dataList} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="第二种方案" key="2">
          <Second dataList={dataList} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="第三种方案" key="3">
        <Third dataList={dataList} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default InteractGameItem;
