import { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import BasicUse from './components/BasicUse';
import FileTextView from './components/FileTextView';
const key = 'basic-element-text-show-tabValue';

const tabComponents = [
  { 
    key: 'normal', 
    component: (
      <>
        <BasicUse />
      </>
    ), 
    tab: '说明'
  },
  { 
    key: 'special', 
    component: (
      <>
        <FileTextView />
      </>
    ), 
    tab: '特殊文件名的省略' 
  }
];

const TextShow = () => {
  const [tabValue, setTabValue] = useState<string>();

  useEffect(() => {
    const current = localStorage.getItem(key);
    if (current) {
      setTabValue(current);
    }
  }, []);

  const updateTabValue = (value: string) => {
    localStorage.setItem(key, value);
    setTabValue(value);
  };

  return (
    <div>
      <div>
        <Tabs activeKey={tabValue} onChange={updateTabValue}>
          {tabComponents.map((item) => (
            <Tabs.TabPane key={item.key} tab={item.tab} />
          ))}
        </Tabs>
      </div>
      <div>
        {tabComponents.map((item) => tabValue === item.key && item.component)}
      </div>
    </div>
  );
};

export default TextShow;