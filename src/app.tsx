import {Suspense} from 'react';
import Loader from './components/loader';
import ProjectRouter from './router';

const App = (): any => (
  <Suspense fallback={<Loader />}>
    <ProjectRouter />
  </Suspense>
);

export default App;
