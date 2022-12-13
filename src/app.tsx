import { fetchResultCode, fetchUser } from '@store/features/app-service';
import { useAppDispatch } from '@store/hooks';
import tr from 'date-fns/locale/tr';
import { Suspense } from 'react';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ProjectRouter from 'router';

const App = () => {
  registerLocale('tr', tr);
  setDefaultLocale('tr');
  const dispatch = useAppDispatch();

  const setAllRequest = async () => {
    await dispatch(fetchUser());
    await dispatch(fetchResultCode());
  };
  setAllRequest();

  return (
    <Suspense>
      <ProjectRouter />
    </Suspense>
  );
};

export default App;
