import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api';

export const loginService = createAsyncThunk('api/request/login', async (body) => {
  const response = await api.post('/api/request/login', {
    body: JSON.stringify(body),
  });
  return response;
});

// userName=admin&password=123456&grant_type=password&channel=1
