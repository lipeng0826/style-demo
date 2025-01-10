import { Tabs } from 'antd';
import Info from '@/components/Info/index';
import Type1 from './type1/index';
import Type2 from './type2/index';

const ImgDemo = () => {
  const items = [
    { label: '固定宽高容器撑满布局', key: '1', children: <Type1 /> },
    { label: 'flex布局撑满布局', key: '2', children: <Type2 /> },
  ];

  return (
    <div>
      <Info>
        <div>图片的一堆处理</div>
      </Info>
      <div style={{padding: 20}}>
        <Tabs defaultActiveKey="4" items={items} />
      </div>
    </div>
  );
};

export default ImgDemo;
