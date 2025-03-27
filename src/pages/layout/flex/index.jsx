import React, { useState, useEffect } from 'react';
import Info from '@/components/Info/index';
import { Button } from 'antd';
import HighLight from '@/components/HighLight/index.tsx';
import './index.less';
const Flex = (props) => {
  const [showDetail, setShowDetail] = useState({
    basicProps: true,
    childProps: true,
  });
  return (
    <div id="flex">
      <Info>
        <h2>Flex布局</h2>
        <p>
          <a
            href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"
            target="_blank"
            rel="noreferrer"
          >
            教程地址
          </a>
        </p>
        <p>
          <a
            href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"
            target="_blank"
            rel="noreferrer"
          >
            阮一峰博客
          </a>
        </p>
        <p>基本属性</p>
        <p className={showDetail.basicProps ? '' : 'desc-flex'}>
          <Button
            onClick={() => setShowDetail({ ...showDetail, basicProps: !showDetail.basicProps })}
          >
            展开/关闭
          </Button>
          <br />
          <h2>
            flex容器属性：
            <br />
          </h2>
          1.flex-direction:项目在主轴上的排列方式
          <br />
          {CssCode(`.box {
    flex-direction: row | row-reverse | column | column-reverse;
  }`)}
          交叉轴：垂直于主轴的排列方式
          <br />
          1.5.当一个元素使用display:flex进行布局之后，子元素会呈现一定的特性：
          <br />
          元素排列为一行等特性
          <br />
          2.flex-wrap：
          <br />
          属性:wrap, nowrap（默认是nowrap;wrap英文是换行的意思）
          <br />
          {CssCode(`.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}`)}
          flex默认是一维属性，设置值为nowrap的时候他的内容会收缩成一行；设置为wrap的时候，内容会换行
          <br />
          3.flex-flow：
          <br />
          是flex-direction和flex-wrap的简写，默认值：row nowrap
          {CssCode(`.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}`)}
          4.justify-content这个经常用
          <br />
          {CssCode(`.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}`)}
          5.align-items属性
          <br />
          在垂直轴上的顺序
          <br />
          {CssCode(`.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}`)}
          6.align-content属性
          <br />
          {CssCode(`.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}`)}
        </p>
        {/* --------------------------------------------------------------------------------------------- */}
        <p className={showDetail.childProps ? '' : 'desc-flex'}>
          <Button
            onClick={() => setShowDetail({ ...showDetail, childProps: !showDetail.childProps })}
          >
            展开/关闭
          </Button>
          <br />
          {/* <Button onClick={() => setShowDetail(!showDetail)}>展开/关闭</Button><br /> */}
          <h2>
            flex选项属性：
            <br />
          </h2>
          1.order:排列顺序，数值越小，越靠前，默认是0
          {CssCode(`.item {
  order: <integer>;
}`)}
          2.flex-grow 放大比例 默认是0，不占用其他空间 有值的话按照值等比占用剩余空间
          <br />
          {CssCode(`.item {
  flex-grow: <number>; /* default 0 */
}`)}
          3.flex-shrink 项目缩小 默认为1，就是空间不足的时候，缩小项目,0的元素不缩小
          {CssCode(`.item {
  flex-shrink: <number>; /* default 1 */
}`)}
          4.flex-basis 在分配多余空间之前，项目占据的主轴空间。默认auto，由内容的宽高决定
          {CssCode(`.item {
  flex-basis: <length> | auto; /* default auto */
}`)}
          5.flex flex属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为0 1
          auto。后两个属性可选。
          {CssCode(`.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}`)}
          flex:1 表示： flex: 1, 1, 0%; 就是可以放大，可以缩小，默认宽度是0，这样多个元素可以实现等比放大缩小<br />
          flex:none 表示： flex: 0, 0, auto; 就是不放大，不缩小，由内容决定<br />
          <br />
          6.align-self flex属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为0 1
          auto。后两个属性可选。
          {CssCode(`.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`)}
          表示它采用自己的对齐方式；
        </p>
      </Info>
      <p>align-content-demo</p>
      <div className="alignContentDemo">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 6</div>
        <div className="item">Item 7</div>
        <div className="item">Item 8</div>
        <div className="item">Item 9</div>
        <div className="item">Item 10</div>
      </div>
      <p>flex-1-demo</p>
      <div className="flex-1-demo">
        <div className="left">111</div>
        <div className="center">222</div>
        <div className="right">333</div>
      </div>
    </div>
  );
};

const CssCode = (str) => {
  return <HighLight code={str} />;
};

export default Flex;
