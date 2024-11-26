import React, { useState } from 'react';
import Info from '@/components/Info/index';
import BorderImage from './image.png';
import { Modal, Button } from 'antd';
import './index.less';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  // 打开模态框
  const showModal = () => {
    setIsModalVisible(true);
  };

  // 关闭模态框
  const handleOk = () => {
    setIsModalVisible(false);
  };

  // 取消模态框
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div id="antd-modal">
      <Info>
        Modal的使用
        <div>
          modal的整体样式：<br/>
            1.一个固定定位的背景<br/>
            2.框使用的是一个相对定位的框,相对顶部100px
          <img src={BorderImage} />
        </div>
      </Info>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className='antd-modal'
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default App;
