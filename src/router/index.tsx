import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import Path from './paths';

const Layout = lazy(() => import('../layout'));
const PageLayout = lazy(() => import('@layout/pages/page-layout'));
const LoginPage = lazy(() => import('@layout/pages/login'));
const ForgotPasswordPage = lazy(() => import('@layout/pages/forgot-password'));
const Page404 = lazy(() => import('@layout/pages/404-page'));
const ProfilePage = lazy(() => import('@layout/pages/profile'));
const Roles = lazy(() => import('@layout/pages/roles'));
const NotificationPage = lazy(() => import('@layout/pages/notifications'));
const Home = lazy(() => import('@views/home'));
const ShipmentsShipment = lazy(() => import('@views/shipments/shipment'));
const ShipmentsTrack = lazy(() => import('@views/shipments/track'));
const TeamLeader = lazy(() => import('@views/hubs/team-leader'));

const ProjectRouter = (): any => {
  const route: any = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Navigate to={Path.home} replace />,
        },
        {
          path: Path.home,
          element: <Home />,
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
        {
          path: 'shipments',
          children: [
            {
              path: 'shipment',
              element: <ShipmentsShipment />,
            },
            {
              path: 'track',
              element: <ShipmentsTrack />,
            },
          ],
        },
        {
          path: 'hubs',
          children: [
            {
              path: 'team-leader',
              element: <TeamLeader />,
            },
          ],
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
