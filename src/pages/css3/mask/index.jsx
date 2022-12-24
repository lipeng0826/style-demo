import React, { useState } from 'react';
import './index.less';
const Mask = (props) => {
  const [show, setShow] = useState(true);

  return show ? (
    <div id="mask">
      <div className="content">
        <div
          className="mark"
          onClick={() => {
            setShow(false);
          }}
        >
          <div>
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
                d="M8.56532 2.31333C8.4435 2.11841 8.22985 2 7.99999 2C7.77013 2 7.55648 2.11841 7.43466 2.31333L0.767991 12.98C0.639546 13.1855 0.632745 13.4445 0.750228 13.6565C0.867712 13.8685 1.09097 14 1.33332 14H14.6667C14.909 14 15.1323 13.8685 15.2498 13.6565C15.3672 13.4445 15.3604 13.1855 15.232 12.98L8.56532 2.31333ZM7.33332 6H8.66666V9.33333H7.33332V6ZM8.66666 10.6667H7.33332V12H8.66666V10.6667Z"
                fill="#FF8800"
              />
            </svg>
            <span>111</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default Mask;
