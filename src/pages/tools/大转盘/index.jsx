import React, { useState, useEffect } from 'react';
import './index.less';
const Canvas = (props) => {
  // useEffect(() => {
  //   const wheel = document.getElementById('wheel');
  //   const spinButton = document.getElementById('spinButton');

  //   // 旋转角度（360度表示一圈）
  //   let angle = 0;

  //   spinButton.addEventListener('click', () => {
  //     // 随机角度，模拟转盘转动，保持至少 3 圈
  //     const randomSpin = Math.floor(Math.random() * 360) + 360 * 3;
  //     angle += randomSpin;

  //     // 应用旋转
  //     wheel.style.transform = `rotate(${angle}deg)`;

  //     // 模拟旋转结束后确定结果
  //     setTimeout(() => {
  //       const prizeIndex = (angle % 360) / 60;
  //       const prize = Math.floor((6 - prizeIndex) % 6); // 6 segments
  //       alert(`恭喜，你赢得了奖品 ${prize + 1}`);
  //     }, 4000); // 与 CSS transition 时间保持一致
  //   });
  // }, []);

  return (
    <div className="wheel-container">
      {/* <div id="wheel" className="wheel">
        <div className="segment">奖品1</div>
        <div className="segment">奖品2</div>
        <div className="segment">奖品3</div>
        <div className="segment">奖品4</div>
        <div className="segment">奖品5</div>
        <div className="segment">奖品6</div>
      </div> */}
      {/* <button id="spinButton">Spin</button> */}
      <video src='https://ai-tool-static-test.ledupeiyou.com/newImg2video/ce787093-dd01-499c-84a7-288bdacbb6eb.mp4?q-sign-algorithm=sha1&q-ak=AKIDpr6kPDYuTurkVdlBwNrc-1V2VQUdJVtnS0Ydu2hIabWyi9omaQv7Wax6cQ0XQpFF&q-sign-time=1743669363;1743672963&q-key-time=1743669363;1743672963&q-header-list=host&q-url-param-list=&q-signature=54f96313d90caf58e9feb80a3bbaea265996a4a1&x-cos-security-token=6niC18warZnFDXd4vg4PNmg6phVeWROa87e1f7ca01825827881bed3427a7dec6l_t-OUDr8MIbndLrZZgIDbuuzrMPJkySmmwzxvZfoRRXhcweccltFoTRnB0J-hse8yVC29yjf2WaLP6SWTxlugh8WS69IUAFuRJBggow_stLzGl9hE8nBNiC_rs9ncjKcGqwtLLoVtw0G62Jtw-K0C9wcFPCa_1pj4ep8FiCrWz9X0RLFRwX2dQzN-1Kvn-sf033gHj3TCnWz9rT6iauzYX5t3DAlaVWUlXAjDvtYSlT5hN3kZyFlrLeuZOjgY-vLPz4uccnPLsVRSCCPGWJ35Pu7rGAAr0S9eKRTpCWIxDaK-HN5X13ZUTZjng4Qm1YueLk1Yxu_vvtLh27Qh51cN8_GoyNpqffgI89TrYrfG2lIC6otnpjgKq2hHvDRDy41QFJ1Y5L8iQLVcCRwXptqBohpmiTqqbhtQQ6BH_r2QB486oEbmkdANi-h91IJB3hwF1qID8VwmvJ_BeIOEU0exH9yJM4q4AA4Bmo1JazMFf2NVCRLhyZXl-egF5DGxnewKqly4tCuDDx4gcSiMBskvsIwt8fBpTCckzR1Hmy8hLQTlp0UBme63et2FrprfPBsEguzy5bXJuJ3CZwzJj1oBrtZPbGRZy-_g1CIey53qFXyRkqFvTV51Qud-NWM7dm4Jn8ao-Q3h41sAETnwxGAddSdHkYUQp6AUDyObZ9Zkx7qWjSiBoPkvhuXZvWtg_D'></video>
    </div>
  );
};

export default Canvas;
