import React, { useState } from 'react';
import './index.less'; // 确保你有一个样式文件来定义CSS

const FlexContainer = () => {
  const [lines, setLines] = useState(10);

  const addLines = () => {
    if (lines < 50) {
      setLines(prevLines => Math.min(prevLines + 10, 50));
    }
  };

  return (
    <div className="flex-container">
      <div className="flex-item-1">
        第一个元素
        <button onClick={addLines} disabled={lines >= 50}>
          增加行数 (当前: {lines}行)
        </button>
        <div className="inner-item">
          {Array.from({ length: lines }, (_, index) => (
            <div key={index}>第{index + 1}行内容</div>
          ))}
        </div>
      </div>
      <div className='chong-qi-item'></div>
      <div className="flex-item-2">
        第二个元素
      </div>
    </div>
  );
};

export default FlexContainer;
