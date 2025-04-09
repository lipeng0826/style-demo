import React from 'react';
import styles from './Welcome.module.less';
import { Link } from 'umi';

const Welcome: React.FC = () => {
  return (
    <div className={styles.listTouchbar}>
      {/* 布局相关 */}
      <div className={styles.title}>布局相关</div>
      <div>
        <Link to="/box-model/index">盒子模型</Link>
      </div>
      <div>
        <Link to="/box-model/index">块元素，行内块，行内元素</Link>     
      </div>
      <div>
        <Link to="/layout/flex">flex布局</Link>
      </div>
      <div>
        <Link to="/layout/flex">grid布局</Link>
      </div>
      <div className={styles.title}>布局实例</div>
      <div>
        <Link to="/layout/scroll-position">滚动位置</Link>
      </div>
      <div>
        <Link to="/layout/input-layout">输入布局</Link>
      </div>
      <div>
        <Link to="/layout/pageLevel/top-middle-bottom">上中下布局</Link>
      </div>
      <div>
        <Link to="/layout/multiple-column-center">多列布局（mulitple-column-center）</Link>
      </div>
      <div>
        <Link to="/layout/open-close">开关样式（open-close）</Link>
      </div>
      {/* 基础组件的样式 */}
      <div className={styles.title}>基础组件的样式</div>
      <div>
        <Link to="/element/text-show">文本展示</Link>
      </div>
      {/* 组件相关 */}
      <div className={styles.title}>组件相关</div>
      <div>
        <Link to="/element/scroll">滚动条样式(scroll-bar)</Link>
      </div>
      <div>
        <Link to="/element/box">盒子样式(list的item)</Link>
      </div>
      <div>
        <Link to="/element/card">固定卡片样式(展示一段排版文案的区域)</Link>
      </div>
      <div>
        <Link to="/element/mul-columns-dot">多列省略布局</Link>
      </div>
      <div>
        <Link to="/element/float-top">固定顶部浮动</Link>
      </div>
      {/* antd相关 */}
      <div className={styles.title}>antd相关</div>
      <div>
        <Link to="/antd/index">antd 相关页面</Link>
      </div>
      {/* small-style */}
      <div className={styles.title}>小样式</div>
      <div>
        <Link to="/small-style/index">入口</Link>
      </div>
      <div>
        <Link to="/small-style/highlight">文字高亮</Link>
      </div>
      <div>
        <Link to="/small-style/img">图片相关</Link>
      </div>
      {/* css样式学习 */}
      <div className={styles.title}>css样式学习</div>
      <div>
        <Link to="/css3/index">css入口</Link>
      </div>
      {/* tools */}
      <div className={styles.title}>tools</div>
      <div>
        <Link to="/tools/wheel">大转盘</Link>
      </div>
    </div>
  );
};

export default Welcome;
