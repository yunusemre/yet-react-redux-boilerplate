import Layout from './layout';
import { connectToRedux } from './store/reduxConnect';

const App = () => {
  return <Layout />;
};

const ConnectedAppContainer = connectToRedux({
  component: App,
  stateProps: () => ({}),
  dispatchProps: {},
});

export default ConnectedAppContainer;
