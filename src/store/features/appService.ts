import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';

export const fetchUser = createAsyncThunk('app/todo', async () => {
  const response = await api.get('/user');
  return response.data;
});
