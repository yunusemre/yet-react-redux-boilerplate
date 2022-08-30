import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

const Home = () => {
  const rootState: any = useSelector((state: RootState) => state);

  return <div>{JSON.stringify(rootState)}</div>;
};

export default Home;
