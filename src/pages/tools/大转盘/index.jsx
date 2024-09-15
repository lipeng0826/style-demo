import React, { useState, useEffect } from 'react';
import './index.less';
const Canvas = (props) => {
  useEffect(() => {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');

    // 旋转角度（360度表示一圈）
    let angle = 0;

    spinButton.addEventListener('click', () => {
      // 随机角度，模拟转盘转动，保持至少 3 圈
      const randomSpin = Math.floor(Math.random() * 360) + 360 * 3;
      angle += randomSpin;

      // 应用旋转
      wheel.style.transform = `rotate(${angle}deg)`;

      // 模拟旋转结束后确定结果
      setTimeout(() => {
        const prizeIndex = (angle % 360) / 60;
        const prize = Math.floor((6 - prizeIndex) % 6); // 6 segments
        alert(`恭喜，你赢得了奖品 ${prize + 1}`);
      }, 4000); // 与 CSS transition 时间保持一致
    });
  }, []);

  return (
    <div className="wheel-container">
      <div id="wheel" className="wheel">
        <div className="segment">奖品1</div>
        <div className="segment">奖品2</div>
        <div className="segment">奖品3</div>
        <div className="segment">奖品4</div>
        <div className="segment">奖品5</div>
        <div className="segment">奖品6</div>
      </div>
      <button id="spinButton">Spin</button>
    </div>
  );
};

export default Canvas;
