import React, { useState } from 'react';
import { Input, Tooltip } from 'antd';
import './index.less';

const InputComp = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearch = () => {
    console.log(searchValue);
  };

  return (
    <div id="input-comp">
      <div style={{ width: 200 }}>
        <Input
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          suffix={
            <span
              onClick={() => {
                onSearch();
              }}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.83203 10.3335C9.04117 10.3335 10.832 8.54263 10.832 6.3335C10.832 4.12436 9.04117 2.3335 6.83203 2.3335C4.62289 2.3335 2.83203 4.12436 2.83203 6.3335C2.83203 8.54263 4.62289 10.3335 6.83203 10.3335ZM6.83203 12.3335C10.1457 12.3335 12.832 9.6472 12.832 6.3335C12.832 3.01979 10.1457 0.333496 6.83203 0.333496C3.51832 0.333496 0.832031 3.01979 0.832031 6.3335C0.832031 9.6472 3.51832 12.3335 6.83203 12.3335Z"
                  fill="#C1C6D0"
                />
                <path
                  d="M11.418 9.42383L14.2464 12.2523L12.8322 13.6665L10.0038 10.838L11.418 9.42383Z"
                  fill="#C1C6D0"
                />
              </svg>
            </span>
          }
          onPressEnter={() => {
            onSearch();
          }}
        />
        <Input.Search placeholder="placeholder" onSearch={onSearch} />
      </div>
    </div>
  );
};

export default InputComp;
