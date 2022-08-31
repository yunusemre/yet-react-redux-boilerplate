import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

const Home = () => {
  const appState: any = useSelector((state: RootState) => state.app);

  return (
    <pre>
      {appState.todoList.result.map((result: any) => (
        <p key={result.name}>{result.name}</p>
      ))}
    </pre>
  );
};

export default Home;
