import React, { useState } from 'react';
import { Button, Menu } from 'antd';
import Style from './index.module.less';
import MyIcon from './icon';
import Info from '@/components/Info/index';

const InteractTemplate = () => {
  const [menuData, setMenuData] = useState([
    {
      key: '1',
      icon: (
        <MyIcon />
      ),
      label: '我的项目',
    },
    {
      key: '2',
      icon: (
        <MyIcon />
      ),
      label: 'Discord账号管理',
    }
  ]);

  const [current, setCurrent] = useState('1');
  const [width, setWidth] = useState(200);

  const setMenu = (e) => {
    setCurrent(e.key);
  };
  
  const udpateOpen = () => {
    setWidth(width === 200 ? 55: 200)
  }

  return (
    <div>
      <Info>
        Antd Menu修改
      </Info>
      <div style={{ marginBottom: 20 }}>
        <Button onClick={udpateOpen}>切换</Button>
      </div>
      <div style={{ width: width, height: '100%', transition: 'width 0.3s', }}>
        <Menu
          className={Style['custom-menu']}
          theme='light'
          defaultSelectedKeys={['1']}
          selectedKeys={[current]}
          items={menuData}
          onClick={setMenu}
        />
      </div>
    </div>

  );
};

export default InteractTemplate;
