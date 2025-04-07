import { useState } from 'react';
import './index.less';
import addSvg from './assets/add.svg';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


const ChildItem = () => {

  const [choose, setChoose] = useState(false);

  const onClick = () => {
    setChoose(true)
  }

  const clickOperate = (e) => {
    e.stopPropagation();
    console.log('操作');
  }

  return <div className={`item-container  ${choose ? 'active' : ''}`} onClick={onClick}>
    <div className="operate" onClick={clickOperate}>
      <span style={{ marginRight: 4 }}><EditOutlined /></span>
      <span><DeleteOutlined /></span>
    </div>
    <div className="top">
      {/* 目前场景字符长度都是2 */}
      <div className="tag-scenario">场景</div>
      <div className="tag-reference">参考强度80</div>
    </div>
    <div className="item-name">名字名字名字名字名字名字名字名字名字名字名字名字名字</div>
  </div>
}

const InteractItem = (props) => {

  const [array] = useState([1]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        {
          array.map(item => <ChildItem key={item} />)
        }
        <div className='item-container empty'>
          <img src={addSvg} />
        </div>
      </div>
    </>
  );
};

export default InteractItem;
