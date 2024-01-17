import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import MainPage from './pages/MainPage';
import { YMInitializer } from 'react-yandex-metrika';
import ErrorPage from './pages/ErrorPage';
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement:<ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <YMInitializer accounts={[]} />
    <RouterProvider router={router} />

  </>
  
);


