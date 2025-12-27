import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            loader:()=>fetch('jsonData2.json'),
            path:'/',
            Component: Home
        },
        {
          loader:()=>fetch('jsonData1.json'),
          path:'/apps',
          Component:Apps
        },
        {
          path:'/installation',
          Component:Installation
        }
    ]
  },
]);