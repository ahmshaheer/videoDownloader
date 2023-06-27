import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Tiktok from './components/tiktok/tiktok-main-component/tiktok.jsx';
import Facebook from './components/facebook/facebook-main-container/facebook.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/tiktok",
        element: <Tiktok />,
      },
      {
        path: "/facebook",
        element: <Facebook />,
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
