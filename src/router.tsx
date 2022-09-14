import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const Layout = lazy(() => import('./layout'));
const PageLayout = lazy(() => import('./layout/pages/page-layout'));
const Home = lazy(() => import('./views/home'));
const LoginPage = lazy(() => import('./layout/pages/login'));
const ForgotPasswordPage = lazy(() => import('./layout/pages/forgot-password'));
const Page404 = lazy(() => import('./layout/pages/404-page'));
const ProfilePage = lazy(() => import('./layout/pages/profile'));

const ProjectRouter = (): any => {
  const route: any = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/home" replace />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/dashboard',
          element: <Home />,
        },
        {
          path: '/profile',
          element: <ProfilePage />,
        },
      ],
    },
    {
      path: '/auth',
      element: <PageLayout />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'forgot-password',
          element: <ForgotPasswordPage />,
        },
      ],
    },
    {
      path: '*',
      element: <PageLayout />,
      children: [
        {
          path: '404',
          element: <Page404 />,
        },
        {
          path: '*',
          element: <Navigate to="/404" replace />,
        },
      ],
    },
  ]);

  return route;
};

export default ProjectRouter;
