import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';

const Home = () => {
  const appState: any = useSelector((state: RootState) => state.app);

  return (
    <>
      <ul>
        {appState.todoList.result.map((result: any) => (
          <li key={result.name}>
            <p>Name: {result.name}</p>
            <p>E-mail: {result.email}</p>
            <p>Website: {result.website}</p>
          </li>
        ))}
      </ul>
      Total Count {appState.todoList.totalCount}
    </>
  );
};

export default Home;
