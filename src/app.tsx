import { Suspense } from 'react';
import Loader from './components/loader';
import ProjectRouter from './router';

const App = (): any => {
  const vh: any = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <Suspense fallback={<Loader />}>
      <ProjectRouter />
    </Suspense>
  );
};

export default App;
