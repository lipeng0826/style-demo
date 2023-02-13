import React, { useState } from 'react';
import './index.less';
import svg from './close.svg';

const InteractTemplate = () => {
  const [tabHidden, setTabHidden] = useState(false);

  /**
   *
   * 1.使用绝对定位把按钮放到那里，然后根据状态更新列的宽度
   *
   */

  return (
    // 内容
    <div
      style={{
        width: tabHidden ? 30 : 200,
        height: 300,
        position: 'relative',
        borderRight: '1px solid rgba(0,0,0,0.085)',
        transition: 'width 0.3s',
        background: '#999999',
      }}
    >
      {/* line */}
      <div
        className="knowledge-graph-tree-tabs-close-line"
        style={{ opacity: tabHidden ? 0.085 : 0 }}
      />
      {/* 按钮 */}
      <div
        className={`knowledge-graph-tree-tabs-close-icon ${tabHidden ? 'active' : ''}`}
        onClick={() => {
          setTabHidden(!tabHidden);
        }}
      >
        <img src={svg} />
      </div>
    </div>
  );
};

export default InteractTemplate;
