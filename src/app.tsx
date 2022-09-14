import {Suspense} from 'react';
import Loader from './components/loader';
import ProjectRouter from './router';

const App = (): any => {
  // const dispatch: any = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchUser());
  // }, []);

  return (
    <Suspense fallback={<Loader />}>
      <ProjectRouter />
    </Suspense>
  );
};

export default App;
