import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Path from './paths';

const Layout = lazy(() => import('../layout'));
const PageLayout = lazy(() => import('@layout/pages/page-layout'));
const LoginPage = lazy(() => import('@layout/pages/login'));
const ForgotPasswordPage = lazy(() => import('@layout/pages/forgot-password'));
const Page404 = lazy(() => import('@layout/pages/404-page'));
const Home = lazy(() => import('../views/home'));
const Dashboard = lazy(() => import('../views/dashboard'));
const ProfilePage = lazy(() => import('@layout/pages/profile'));
const Roles = lazy(() => import('@layout/pages/roles'));
const NotificationPage = lazy(() => import('@layout/pages/notifications'));

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
          path: Path.home,
          element: <Home />,
        },
        {
          path: Path.dashboard,
          element: <Dashboard />,
        },
        {
          path: Path.profile,
          element: <ProfilePage />,
        },
        {
          path: Path.roles,
          element: <Roles />,
        },
        {
          path: Path.notifications,
          element: <NotificationPage />,
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
