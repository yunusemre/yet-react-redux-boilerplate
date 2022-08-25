import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = lazy(() => import('./views/home'));

const ProjectRouter = (): any => {
  const route: any = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return route;
};

export default ProjectRouter;
