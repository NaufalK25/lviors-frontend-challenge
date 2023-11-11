import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import PostPage from './pages/PostPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <RegisterPage />
  },
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
