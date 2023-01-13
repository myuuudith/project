import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Frontpage from './Frontpage';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import MealItem from './MealItem';
import Register from './register'
import register from './registertest';
import Likemeal from './likemeal'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Registertest from './registertest';

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      {/* <p>Navbar</p> */}
      <MealItem />
    </>,
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <p>Home Page</p>,
      },
      {
        path: "/Profile",
        element: <>
          {localStorage.getItem('session') ? <p>Profile Page</p> : 'forbidden'}
        </>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/home",
    element: <MealItem />,
  },

  {
    path: "/menu",
    element:<MealItem/>
  },

  {
    path: "/register",
    element:<Register/>
  },

  {
    path: "/test",
    element:<Registertest/>
  },

  {
    path: "/test11",
    element:<Likemeal/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
