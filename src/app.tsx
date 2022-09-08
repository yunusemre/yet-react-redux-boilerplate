import { Suspense } from 'react';
import Loader from './components/loader';
import Layout from './layout';
import ProjectRouter from './router';

const App = (): any => {
  // const dispatch: any = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <ProjectRouter />
      </Layout>
    </Suspense>
  );
};

export default App;
