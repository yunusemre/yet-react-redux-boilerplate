import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const Layout = lazy(() => import('./layout'));
const PageLayout = lazy(() => import('./layout/pages/page-layout'));
const Home = lazy(() => import('./views/home'));
const ShipmentSave = lazy(() => import('./views/shipment-operations/shipment-save'));
const LoginPage = lazy(() => import('./layout/pages/login'));
const ForgotPasswordPage = lazy(() => import('./layout/pages/forgot-password'));
const Page404 = lazy(() => import('./layout/pages/404-page'));

const ProjectRouter = (): any => {
  const route: any = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/shipment-operations',
          element: <PageLayout />,
          children: [
            {
              path: 'saved',
              element: <ShipmentSave />,
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
    {
      path: '*',
    },
  ]);

  return route;
};

export default ProjectRouter;
