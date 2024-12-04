import { Tabs } from 'antd';
import OpenClose1 from './type1/index';
import OpenClose2 from './type2/index';

const InteractItem = () => {
  const items = [
    { label: '开关1', key: '1', children: <OpenClose1 /> },
    { label: '开关2', key: '2', children: <OpenClose2 /> },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="4" items={items} />
    </div>
  );
};

export default InteractItem;
