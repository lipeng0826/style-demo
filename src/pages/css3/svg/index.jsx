/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import Info from '@/components/Info/index';
import Svg1 from './svg/1.svg';
import { Copy2Icon } from './svg/index'
const SVG = (props) => {

  const [color, setColor] = useState(undefined);

  return (
    <div id="css3-svg">
      <Info>
        直接写本地
      </Info>
      <svg
        version="1.1"
        baseProfile="full"
        width="3.6363636363636362em"
        height="5.2272727272727275em"
        viewBox="-10 -10 80 115"
        style={{ fontFamily: 'Times New Roman 思源黑体SC-Regular' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          style={{
            fontSize: 22,
            textAnchor: 'middle',
            dominantBaseline: 'middle',
            fill: 'currentColor',
            stroke: 'currentColor',
          }}
        >
          <rect x="30" y="0" width="25" height="25" fill="transparent"></rect>
          <text stroke="none" x="42.5" y="14.5">
            1
          </text>
          <rect x="0" y="30" width="25" height="25" fill="transparent"></rect>
          <svg width="26" height="26" x="-0.5" y="29.5">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19 11.4823L19 12.4999L12.5354 12.553L12.5177 19.0354H11.5L11.4823 12.553L5 12.4999L5.0354 11.4823L11.5 11.5177V5.05308L12.5 5.0354L12.5531 11.5177L19 11.4823Z"
              stroke="none"
            ></path>
          </svg>
          <rect x="30" y="30" width="25" height="25" fill="transparent"></rect>
          <text stroke="none" x="42.5" y="44.5">
            1
          </text>
          <line x1="-15" y1="60" x2="60" y2="60"></line>
          <rect x="30" y="65" width="25" height="25" fill="transparent"></rect>
          <text stroke="none" x="42.5" y="79.5">
            2
          </text>
        </g>
      </svg>
      <Info>
        通过img的src引入
        <p>简单，但是无法修改属性</p>
      </Info>
      <img src={Svg1}></img>
      <Info>
        通过在一个文件里统一管理一堆svg，然后返回每一个svg<br/>
        这样就可以修改属性，也不用写到当前文件
      </Info>
      <div style={{ marginLeft: 20 }}>
        <Button onClick={() => setColor(color ? undefined : 'red')}>修改颜色</Button>
        <span style={{ marginLeft: 20 }}><Copy2Icon fill={color} /></span>
      </div>
    </div>
  );
};

export default SVG;
