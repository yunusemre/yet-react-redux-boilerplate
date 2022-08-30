import { Suspense } from 'react';
import Loader from './components/Loader';
import ProjectRouter from './router';

const App = (): any => (
  <Suspense fallback={<Loader />}>
    <ProjectRouter />
  </Suspense>
);

export default App;
