import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Report from './component/Report';
import Dashboard from './component/dash';
import Support from './component/Support';
import Employee from './component/Employee';
import Notification from './component/Notif';
import Settings from './component/Settings';
import Users from './component/Users';
import SupportStore from './component/SuppStore';
import SupportMember from './component/SuppMember';
import ReportMember from './component/ReportMem';
import ReportStore from './component/RepStore';
import UserStore from './component/UserStore';
import UserMember from './component/UserMem';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "report/xpert",
    element: <Report/>,
  },
  {
    path: "support/xpert",
    element: <Support/>,
  },
  {
    path: "employee",
    element: <Employee/>,
  },
  {
    path: "notification",
    element: <Notification/>,
  },
  {
    path: "settings",
    element: <Settings/>,
  },
  {
    path: "users/xpert",
    element: <Users/>,
  },
  {
    path: "support/xstore",
    element: <SupportStore/>,
  },
  {
    path: "support/member",
    element: <SupportMember/>,
  },
  {
    path: "reports/member",
    element: <ReportMember/>,
  },
  {
    path: "reports/xstore",
    element: <ReportStore/>,
  },
  {
    path: "users/xstore",
    element: <UserStore/>,
  },
  {
    path: "users/member",
    element: <UserMember/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
