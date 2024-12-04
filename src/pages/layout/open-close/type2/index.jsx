import React, { useState } from 'react';
import { Menu } from 'antd';
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

  const setMenu = (e) => {
    setCurrent(e.key);
  };

  return (
    <div>
      <Info>
        Antd Menu修改
      </Info>
      <div style={{ width: 200, height: '100%' }}>
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
