import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ChangePasswordPage from './pages/ChangePasswordPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import './index.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <HomePage />
      },
      {
        path: '/user',
        element: <UserPage />,
        errorElement: <HomePage />
      },
      {
        path: '/change-password',
        element: <ChangePasswordPage />,
        errorElement: <HomePage />
      },
      {
        path: '/post',
        element: <PostPage />,
        errorElement: <HomePage />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
