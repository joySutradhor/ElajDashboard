import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import SignUp from './Dashboard/SignUp/SignUp';
import Home from './Dashboard/HomeDashboard/Home';
import Doctors from './Dashboard/Doctors/Doctors';
// import Intro from './Dashboard/HomeDashboard/Intro';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/doctors",
    element : <Doctors></Doctors>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
