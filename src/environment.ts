const ENV: any = {
  development: {
    apiUrl: 'https://apitest.klyglsn.com',
  },
  production: {
    apiUrl: '/',
  },
};

export const getEnvVars = (): any => ENV[process.env.NODE_ENV];
