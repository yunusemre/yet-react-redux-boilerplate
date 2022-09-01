import API from '../api';

export const initAPIInterceptor = (store: any): void => {
  API.interceptors.request.use(
    async (request: any) => {
      const { token } = store.getState();

      if (!request.headers.Authorization && token && token.access_token) {
        request.headers.Authorization = `${token.token_type} ${token.access_token}`;
      }

      if (!request.headers['Content-Type']) {
        request.headers['Content-Type'] = 'application/json';
      }
      return request;
    },
    (error) => new Error(error)
  );

  API.interceptors.response.use(
    (response: any) => response.data,
    async (error) => {
      const errorRes = error.response;
      if (errorRes) {
        showError({
          error: errorRes.data.error || errorRes.statusText || {},
          status: errorRes.status,
        });
      }

      return await Promise.reject(error);
    }
  );
};

const showError = ({ error = {}, status }: any) => {
  let message = '';
  let title = '';

  if (typeof error === 'string') {
    message = error;
  } else if (error.details) {
    message = error.details;
    title = error.message;
  } else if (error.message) {
    message = error.message;
  } else {
    switch (status) {
      case 401:
        title = '401';
        message = '401';
        break;
      case 403:
        title = '403';
        message = '403';
        break;
      case 404:
        title = '404';
        message = '404';
        break;
      case 500:
        title = '500';
        message = '500';
        break;
      default:
        break;
    }
  }

  // toast(`${title} - ${message}`, {
  //   position: 'top-right',
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });

  return { message: message, title: title };
};
