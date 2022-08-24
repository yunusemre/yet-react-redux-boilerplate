import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { userApi } from './api/user.api';

function App() {
  const [data, setData] = useState<any>([]);
  const { t } = useTranslation();

  useEffect(() => {
    userApi().then((response: any) => setData(response.result));
  }, []);

  return (
    <div className="App">
      {data.map((result: any, index: number) => (
        <p key={index}>
          <span>{result.name}</span>
          <span>{result.email}</span>
        </p>
      ))}
    </div>
  );
}

export default App;
