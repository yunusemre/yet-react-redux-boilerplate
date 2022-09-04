import { Suspense, useEffect } from 'react';
import Loader from './components/loader';
import Layout from './layout';
import ProjectRouter from './router';
import { fetchUser } from './store/features/appService';
import { useAppDispatch } from './store/hooks';

const App = (): any => {
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <ProjectRouter />
      </Layout>
    </Suspense>
  );
};

export default App;
