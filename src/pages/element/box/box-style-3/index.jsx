import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import './index.less';

import cancelStart from "./assets/img/cancelStart.png";
import selectStart from "./assets/img/selectStart.png";
import VIPIcon from "./assets/img/vip.png";

const ImgUrl = 'https://q-fe.aixuexi.com/cloud/interact-game/1667790947488-7ae604d8c887:dxss2.png';
const InteractItem = (props) => {
  const [data, setData] = useState({});
  return (
    <>
      <div className="courseCard">
        <div className={`courseCard_cover ${'shuxue_xx'}`}>
          <div className="courseCard_cover_name">春季春季二年级数学知识巩固体系学习大迭代</div>
        </div>
        <div className="courseCard_info">
          <div>
            <span className="season">春季</span>
            <span className="version">复习</span>
          </div>
          <span className="title">春季课</span>
          <div className="vip">
            <img className="vip_img" src={VIPIcon} />
          </div>
          <div className="courseCard_info_bottom">
            <div className="teacher_info">
              <span className="teacher_icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.0306 6.66671C9.13517 6.66671 10.0306 5.77128 10.0306 4.66671C10.0306 3.56214 9.13517 2.66671 8.0306 2.66671C6.92603 2.66671 6.0306 3.56214 6.0306 4.66671C6.0306 5.77128 6.92603 6.66671 8.0306 6.66671ZM8.0306 8.00004C9.87155 8.00004 11.3639 6.50766 11.3639 4.66671C11.3639 2.82576 9.87155 1.33337 8.0306 1.33337C6.18965 1.33337 4.69727 2.82576 4.69727 4.66671C4.69727 6.50766 6.18965 8.00004 8.0306 8.00004Z"
                    fill="#70859F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.6667 13.3333V11.6607C12.6667 11.3509 12.5487 11.2274 12.4936 11.1922C11.7426 10.7137 10.2509 9.99996 8 9.99996C5.74915 9.99996 4.25744 10.7137 3.50643 11.1922C3.45125 11.2274 3.33333 11.3509 3.33333 11.6607V13.3333H12.6667ZM2.78997 10.0678C2.25315 10.4098 2 11.0242 2 11.6607V14.6666H14V11.6607C14 11.0242 13.7468 10.4098 13.21 10.0678C12.2853 9.47854 10.5486 8.66663 8 8.66663C5.45141 8.66663 3.71473 9.47854 2.78997 10.0678Z"
                    fill="#70859F"
                  />
                </svg>
              </span>
              <span className="teacher_name">王老师</span>
            </div>
            <div className="lesson_info">共2讲</div>
          </div>
        </div>
        <img className="collection" src={cancelStart} alt="cancelStart" />
        <img className="collection" src={selectStart} alt="selectStart" />
      </div>
    </>
  );
};

export default InteractItem;
