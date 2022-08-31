import { Suspense, useEffect } from 'react';
import Loader from './components/Loader';
import ProjectRouter from './router';
import { fetchUsers } from './store/features/appService';
import { useAppDispatch } from './store/hooks';

const App = (): any => {
  const dispatch: any = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <ProjectRouter />
    </Suspense>
  );
};

export default App;
