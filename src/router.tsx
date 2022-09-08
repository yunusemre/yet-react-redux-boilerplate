import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = lazy(() => import('./views/home'));
const About = lazy(() => import('./views/about'));

const ProjectRouter = (): any => {
  const route: any = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
  ]);

  return route;
};

export default ProjectRouter;
