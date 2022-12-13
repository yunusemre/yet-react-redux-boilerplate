import Path from '@routers/paths';
import axios from 'axios';
import { getEnvVars } from 'environment';
import { toast } from 'react-toastify';

const controller = new AbortController();
const win: any = window;
const storage: any = localStorage;

const { apiUrl } = getEnvVars();
axios.defaults.baseURL = apiUrl;

export const initAPIInterceptor = (store: any): void => {
  axios.interceptors.request.use(
    async (request: any) => {
      const { auth } = store.getState();

      request.signal = controller.signal;
      request.headers['access-control-allow-methods'] = 'GET, POST, PUT, DELETE';
      request.headers['access-control-allow-origin'] = '*';
      request.headers['accept-language'] = 'tr-TR';

      if (!request.headers['Content-Type']) {
        request.headers['Content-Type'] = 'application/json';
      }

      if (!request.headers.authorization) {
        request.headers.authorization = `${auth.token_type} ${auth.access_token}`;
      }

      return request;
    },
    (error: any) => {
      controller.abort();
      return new Error(error);
    }
  );

  axios.interceptors.response.use(
    ({ data }: any) => data,
    async (error: any) => {
      if (error.code && window.location.pathname !== Path.login) {
        controller.abort();
        storage.clear();
        win.location.href = window.location.origin + Path.login;
        return;
      }
      showError({
        error: error || {},
      });

      return await Promise.reject(error);
    }
  );
};

const showError = (err: any) => {
  const res: any = err.response.error;
  const message = res.statusText;
  toast.error(`${message}`);

  // switch (status) {
  //   case 400:
  //     message = '400';
  //     break;
  //   case 401:
  //     message = '401';
  //     break;
  //   case 403:
  //     message = '403';
  //     break;
  //   case 404:
  //     message = '404';
  //     break;
  //   case 500:
  //     message = '500';
  //     break;
  //   default:
  //     break;
  // }

  return err;
};
