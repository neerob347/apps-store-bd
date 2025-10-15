
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React, { lazy, Suspense } from "react";
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './components/Main';
import AppDetails from './components/apps/AppDetails';
import { ToastContainer } from 'react-toastify';


const Home = lazy(() => import("./components/home/Home"));
const Apps = lazy(() => import('./components/apps/Apps'));
const Installs = lazy(() => import('./components/installs/Installs'));
const Error404 = lazy(() => import('./components/Error404'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/apps",
        element: <Apps />
      },
      {
        path: "/apps/:appId",
        element: <AppDetails />
      },
      {
        path: "/installed",
        Component: Installs,
      },
      {
        path: "*",
        element: <Error404 />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>,
)

