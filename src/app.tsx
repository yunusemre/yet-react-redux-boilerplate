import { Suspense } from 'react';
import Loader from './components/Loader';
import ProjectRouter from './router';
import { connectToRedux } from './store/reduxConnect';

const App = (): any => (
  <Suspense fallback={<Loader />}>
    <ProjectRouter />
  </Suspense>
);

const ConnectedAppContainer = connectToRedux({
  component: App,
  stateProps: () => ({}),
  dispatchProps: {},
});

export default ConnectedAppContainer;
