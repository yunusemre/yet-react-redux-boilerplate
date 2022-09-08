import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const PageLayout = lazy(() => import('./layout/page'));
const Home = lazy(() => import('./views/home'));
const ShipmentSave = lazy(() => import('./views/shipmentOperations/shipmentSave'));

const ProjectRouter = (): any => {
  const route: any = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/shipment-operations/saved',
      element: <ShipmentSave />,
    },
  ]);

  return route;
};

export default ProjectRouter;
