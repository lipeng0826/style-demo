import React, { useState } from 'react';
import { Button } from 'antd';
import Info from '@/components/Info';
import './index.less';

const TopBottom = () => {

  const [list, setList] = useState([]);

  const addRow = () => {
    setList([...list, { id: list.length + 1 }]);
  }

  return (
    <div className="page-container">
      {/* 上部分 - 图片展示区域 */}
      <div className="page-top">
        <Info>
          这个代码的功能是：让上下两个区域根据自己的内容占据上下两个区域，中间是空白；<br />
          在乐创项目有使用，还是挺重要的；<br />
          <Button type='primary' onClick={addRow}>增加一行</Button>
          <p>
            页面使用flex布局：
              上面使用flex的默认值： 
                flex-grow: 0;
                flex-shrink: 1;
                flex-basis: auto;
          </p>
        </Info>
        {
          list.map(item => (
            <div className="image-grid">
              {/* 图片网格占位 */}
              <div className="image-item"></div>
              <div className="image-item"></div>
              <div className="image-item"></div>
              <div className="image-item"></div>
            </div>
          ))
        }
      </div>

    <div className='middle-area' ></div>

      {/* 下部分 - 音频/操作区域 */}
      <div className="page-bottom">
        <div className="bottom-content">
          <div className="audio-player">
            {/* 音频播放器占位 */}
          </div>
          <div className="action-buttons">
            {/* 操作按钮占位 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBottom;
