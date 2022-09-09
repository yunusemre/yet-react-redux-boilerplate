import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Layout = lazy(() => import('./layout'));
const PageLayout = lazy(() => import('./layout/page'));
const Home = lazy(() => import('./views/home'));
const ShipmentSave = lazy(() => import('./views/shipmentOperations/shipmentSave'));
const LoginPage = lazy(() => import('./layout/login'));
const ForgotPasswordPage = lazy(() => import('./layout/forgotPassword'));

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
  ]);

  return route;
};

export default ProjectRouter;
