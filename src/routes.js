import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';

import NotFound from './pages/Page404';
import NotAccess from './pages/Page403';
import Register from './pages/LoginPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
// dash and blog layouts
const DashboardLayout = React.lazy(() => import('./layouts/dashboard'));
const BlogsLayout = React.lazy(() => import('./bloglayout'));

// ----------------------------------------------------------------------
const DashboardApp = React.lazy(() => import('./pages/DashboardApp'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Service = React.lazy(() => import('./components/service/Service'));
const About = React.lazy(() => import('./pages/About'));
const CreatePost = React.lazy(() => import('./pages/CreatePost'));
const BlogPage = React.lazy(() => import('./bloglayout/Blogs/BlogPage'));
const PrivacyPolicy = React.lazy(() => import('./components/Policy/PolicyPage'));
const SourseCode = React.lazy(() => import('./components/soursecode/SourseCode'));
const Traffic = React.lazy(() => import('./pages/TrafficBySite'));
const PostPage = React.lazy(() => import('./components/post/PostPage'));
const EditPost = React.lazy(() => import('./components/post/EditPost'));

export default function Router() {
  return useRoutes([
    {
      path: '/2023',
      element: <DashboardLayout />,
      children: [
        {
          path: 'home',
          element: <DashboardApp />,
        },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
        { path: 'service', element: <Service /> },
        { path: 'project', element: <CreatePost /> },
        { path: 'blogpage', element: <BlogPage /> },
        { path: 'privacypolicy', element: <PrivacyPolicy /> },
        { path: 'preview', element: <Traffic /> },

        {
          path: 'blogs',
          element: <BlogsLayout />,
          children: [
            { path: '/2023/blogs/post/:id', element: <PostPage /> },
            { path: '/2023/blogs/edit/:id', element: <EditPost /> },
            {
              path: 'sourcecode',
              element: <SourseCode />,
            },
          ],
        },
      ],
    },

    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/2023/home" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
        { path: 'nopermission', element: <NotAccess /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'logout', element: <Logout /> },
      ],
    },

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
