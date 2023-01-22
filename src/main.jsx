import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './views/App'
import './index.css'
import About from './views/About';
import Close from './views/Close';
import Destinations from './views/Destinations';
import Oleh from './views/Oleh';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/close",
    element: <Close />
  },
  {
    path: "/destinations",
    element: <Destinations />
  },
  {
    path: "/destinations/:desti",
    element: <Oleh />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
