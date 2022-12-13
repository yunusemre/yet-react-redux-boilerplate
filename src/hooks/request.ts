import axios, { AxiosResponse } from 'axios';
import { getEnvVars } from 'environment';
import { useEffect, useState } from 'react';

const { apiUrl } = getEnvVars();

export const useApi = (axiosParams: any) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<any>('');
  const [loading, setloading] = useState<boolean>(true);

  const fetchData = async (params: any) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (error: any) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData({ ...axiosParams, baseURL: apiUrl, withCredentials: false });
  }, []);

  return { response, error, loading };
};
