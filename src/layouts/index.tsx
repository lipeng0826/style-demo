import { Link, Outlet } from 'umi';
import Draggable from 'react-draggable';
import './_router.less';

export default function Layout() {
  return (
    <div>
      {/* <Draggable>
        <div className="list-touchbar">
          <ul>
            <div className="description">
              <div className="title">样式展示概览：</div>
              <div className="title">布局相关</div>
              <div>
                <Link to="/layout/flex">flex布局</Link>
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
              <div className="title">组件相关</div>
              <div>
                <Link to="/element/scroll">滚动条样式(scroll-bar)</Link>
              </div>
              <div>
                <Link to="/element/box">盒子样式(box)</Link>
              </div>
              <div>
                <Link to="/element/mul-columns-dot">多列省略布局</Link>
              </div>
              <div className="title">antd相关</div>
              <div>
                <Link to="/antd/index">antd 相关页面</Link>
              </div>
              <div className="title">小样式</div>
              <div>
                <Link to="/small-style/index">入口</Link>
              </div>
              <div className="title">css样式学习</div>
              <div>
                <Link to="/css3/index">css入口</Link>
              </div>
              <div className="title">tools</div>
              <div>
                <div><Link to="/tools/wheel">大转盘</Link></div>
                <div><Link to="/tools/editContent">可编辑div</Link></div>
              </div>
            </div>
          </ul>
        </div>
      </Draggable> */}

      <Outlet />
    </div>
  );
}
