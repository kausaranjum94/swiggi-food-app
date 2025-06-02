import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About';
import Error from './components/Error';
import Content from './components/Content';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import RestaurantMenu from './components/RestaurantMenu';
import LoginComponent from './components/LoginComponent';
import {UserProvider} from './data/UserContext';
import { Provider } from "react-redux";
import appStore from './data/appStore';
import Cart from './components/Cart';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Content />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu/>
      },
      {
        path: "/login",
        element: <LoginComponent/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
     
    ],
    errorElement: <Error />
  },
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={appStore}>
    <UserProvider>
      <RouterProvider router={appRouter} />
    </UserProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
