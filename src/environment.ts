const ENV: any = {
  development: {
    apiUrl: 'http://appdev.ekolkargo.com:81',
  },
  production: {
    apiUrl: '/',
  },
};

export const getEnvVars = (): any => ENV[process.env.NODE_ENV];
