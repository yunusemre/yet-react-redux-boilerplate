import Loader from '@components/loader';
import { Suspense } from 'react';
import ProjectRouter from 'router';

const App = (): any => (
  <Suspense fallback={<Loader />}>
    <ProjectRouter />
  </Suspense>
);

export default App;
