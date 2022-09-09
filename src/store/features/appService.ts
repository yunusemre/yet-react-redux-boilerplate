import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchUser = createAsyncThunk('api/request/GetUserInfo', async () => {
  const response = await api.post('/api/request/GetUserInfo', {
    body: '{"LoadProfile":true,"LoadMenu":true,"LoadProfilePicture":true}',
  });
  return response;
});
