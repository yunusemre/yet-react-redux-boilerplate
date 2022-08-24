import api from '.';

export const userApi = () => api({ method: 'GET', url: '/user' }).then((res) => res);
