const ENV: any = {
  development: {
    apiUrl: 'http://localhost:3003',
  },
  production: {
    apiUrl: '/',
  },
};

export const getEnvVars = (): any => ENV[process.env.NODE_ENV];
