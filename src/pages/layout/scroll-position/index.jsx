import React, { useState } from 'react';
import Info from '@/components/Info/index';
import styles from './index.module.less';


const ScrollPosition = () => {
  return (
    <div>
      <Info>
        <p>滚动位置</p>
      </Info>
      <div className={styles.container}>
        <div>
          <p>滚动位置</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollPosition;
