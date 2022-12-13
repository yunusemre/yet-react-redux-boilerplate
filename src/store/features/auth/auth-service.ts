import axios from 'axios';

export const loginService = async ({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) => {
  const body = `userName=${userName}&password=${password}&grant_type=password&channel=1`;
  const response = await axios.post('/api/request/login', body, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response;
};
