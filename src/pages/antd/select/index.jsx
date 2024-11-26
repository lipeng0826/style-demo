import React from 'react';
import { Select, Flex } from 'antd';
import Info from '@/components/Info/index';
import './index.less';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const App = () => (

  <div id="antd-select">
    <Info>
      <h2>Select样式</h2>
      <p>
        <span>
        </span>
      </p>
    </Info>
    <div>
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'jackJackJackJackJackJackJack',
            label: 'JackJacss1',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
          {
            value: 'Yiminghe',
            label: 'yiminghe',
          },
          {
            value: 'disabled',
            label: 'Disabled',
            disabled: true,
          },
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        disabled
        options={[
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        loading
        options={[
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ]}
      />
      <Select
        defaultValue="lucy"
        style={{
          width: 120,
        }}
        allowClear
        options={[
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ]}
        placeholder="select it"
      />
    </div>
    <Info>
      <h3>Select-边框不展示，不展示右侧按钮</h3>
      <p>
        1.suffixIcon=null // 按钮不展示 <br/>
        2.ant-select-selector border: 0, box-shadow: none 边框不显示 <br/>
        3.注意:如果要修改弹框的样式得增加个popupClassName属性，然后在里面修改 <br/>
      </p>
    </Info>
    <div>
      <Select
        className='demo1'
        defaultValue="lucy"
        style={{
          width: 'auto',
        }}
        suffixIcon={null} // 移除默认的下拉箭头
        options={[
          {
            value: 'lucy',
            label: 'Lucy',
            desc: 'L',
          },
          {
            value: 'lucy2',
            label: 'Lucy2',
            desc: 'L2',
          },
        ]}
        optionRender={(option) => (
          <span>{option.data.desc}</span>
      )}
        placeholder="select it"
        popupClassName='antd-select-antd-select-white-bg'
        defaultOpen={true}
      />
    </div>
  </div>
);
export default App;