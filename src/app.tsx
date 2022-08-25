import { Suspense } from 'react';
import ProjectRouter from './router';
import { connectToRedux } from './store/reduxConnect';

const App = (): any => (
  <Suspense fallback={'loading'}>
    <ProjectRouter />
  </Suspense>
);

const ConnectedAppContainer = connectToRedux({
  component: App,
  stateProps: () => ({}),
  dispatchProps: {},
});

export default ConnectedAppContainer;
