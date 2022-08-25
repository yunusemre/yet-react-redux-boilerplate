const ENV: any = {
  development: {
    apiUrl: 'http://localhost:3001'
  },
  production: {
    apiUrl: '/'
  }
}

export const getEnvVars = (): void => ENV[process.env.NODE_ENV]
