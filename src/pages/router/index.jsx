import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from '../layouts/Welcome.tsx';
import FlexLayout from '../layout/flex/index.jsx';
import InputLayout from '../layout/input-layout/index.jsx';
import TopMiddleBottom from '../layout/pageLevel/top-middle-bottom/index.jsx';
import MultipleColumnCenter from '../layout/mulitple-column-center/index.tsx';
import OpenClose from '../layout/open-close/index.jsx';
import BoxElement from '../element/box/index.jsx';
import ScrollBar from '../element/scroll-bar';
import MulColumnsDot from '../element/mul-columns-dot/index.jsx';
import AntdIndex from '../antd/index.jsx';
import AntdInput from '../antd/input/index.jsx';
import AntdButton from '../antd/button/index.jsx';
import AntdMessage from '../antd/message/index.jsx';
import AntdTree from '../antd/tree/index.jsx';
import SmallStyle from '../smallStyle/index.jsx';
import Css3Index from '../css3/index.jsx';
import WheelTool from '../tools/大转盘/index.jsx';
import EditContent from '../tools/editContent/index.jsx'
import NotFound from '../404';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/layout/flex" component={FlexLayout} />
      <Route path="/layout/input-layout" component={InputLayout} />
      <Route path="/layout/pageLevel/top-middle-bottom" component={TopMiddleBottom} />
      <Route path="/layout/multiple-column-center" component={MultipleColumnCenter} />
      <Route path="/layout/open-close" component={OpenClose} />
      <Route path="/element/box" component={BoxElement} />
      <Route path="/element/scroll" component={ScrollBar} />
      <Route path="/element/mul-columns-dot" component={MulColumnsDot} />
      <Route path="/antd/index" component={AntdIndex} />
      <Route path="/antd/input" component={AntdInput} />
      <Route path="/antd/button" component={AntdButton} />
      <Route path="/antd/message" component={AntdMessage} />
      <Route path="/antd/tree" component={AntdTree} />
      <Route path="/small-style/index" component={SmallStyle} />
      <Route path="/css3/index" component={Css3Index} />
      <Route path="/tools/wheel" component={WheelTool} />
      <Route path="/tools/editContent" component={EditContent} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;


// import React from 'react';
// import Draggable from 'react-draggable';
// import './_router.less';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// const routes = [
//   {
//     path: '/',
//     component: import('../Welcome'),
//   },
//   {
//     path: '/layout/flex',
//     component: import('../layout/flex/index.jsx'),
//   },
//   {
//     path: '/layout/input-layout',
//     component: import('../layout/input-layout/index.jsx'),
//   },
//   {
//     path: '/layout/pageLevel/top-middle-bottom',
//     component: import('../layout/pageLevel/top-middle-bottom.jsx/index.jsx'),
//   },
//   {
//     path: '/layout/multiple-column-center',
//     component: import('../layout/mulitple-column-center/index.tsx'),
//   },
//   {
//     path: '/layout/open-close',
//     component: import('../layout/open-close/index.jsx'),
//   },
//   {
//     path: '/element/box',
//     component: import('../element/box/index.jsx'),
//   },
//   {
//     path: '/element/scroll',
//     component: import('../element/scroll-bar'),
//   },
//   {
//     path: '/element/mul-columns-dot',
//     component: import('../element/mul-columns-dot/index.jsx'),
//   },
//   {
//     path: '/antd/index',
//     component: import('../antd/index.jsx'),
//   },
//   {
//     path: '/antd/input',
//     component: import('../antd/input/index.jsx'),
//   },
//   {
//     path: '/antd/button',
//     component: import('../antd/button/index.jsx'),
//   },
//   {
//     path: '/antd/message',
//     component: import('../antd/message/index.jsx'),
//   },
//   {
//     path: '/antd/tree',
//     component: import('../antd/tree/index.jsx'),
//   },
//   {
//     path: '/small-style/index',
//     component: import('../smallStyle/index.jsx'),
//   },
//   {
//     path: '/css3/index',
//     component: import('../css3/index.jsx'),
//   },
//   {
//     path: '/tools/wheel',
//     component: import('../tools/大转盘/index.jsx'),
//   },
//   {
//     path: '*',
//     component: import('../404'),
//   },
// ];

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <Draggable>
//           <div className="list-touchbar">
//             <ul>
//               {routes.map((route, index) => (
//                 <li key={index}>
//                   <Link to={route.path}>{route.path}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </Draggable>
//         <Switch>
//           {routes.map((route, index) => (
//             <Route key={index} path={route.path}>
//               <route.component />
//             </Route>
//           ))}
//         </Switch>
//       </div>
//     </Router>
//   );
// }