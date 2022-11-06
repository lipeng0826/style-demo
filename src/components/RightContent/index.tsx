import { Space, Select } from 'antd';
import React, { useCallback } from 'react';
import { useModel } from 'umi';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');

  const handleChange = useCallback(
    (value: any) => {
      localStorage.setItem('GAOSI_SUBJECT_ID', value)
      setInitialState((s: any) => ({ ...s, subjectId: value }));
    },
    [setInitialState],
  );

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  const subjectProductId = Number(localStorage.getItem('GAOSI_SUBJECT_ID'))
  return (
    <Space className={className}>
      {
        (initialState?.subjectProduct?.length > 0 && initialState?.showSubject) ?
          <Select value={subjectProductId} style={{ width: 120 }} onChange={handleChange}>
            {initialState.subjectProduct.map((item: any) => {
              return (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              );
            })}
          </Select>
          :
          <span />
      }
    </Space>
  );
};
export default GlobalHeaderRight;
