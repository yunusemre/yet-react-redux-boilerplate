const ENV: any = {
  development: {
    apiUrl: '/',
  },
  production: {
    apiUrl: '/',
  },
};

export const getEnvVars = (): any => ENV[process.env.NODE_ENV];
