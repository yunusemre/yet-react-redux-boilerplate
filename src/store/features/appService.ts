import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';

export const fetchUser = createAsyncThunk('app/todo', async () => {
  const response = await API.get('/users');
  return response.data;
});
