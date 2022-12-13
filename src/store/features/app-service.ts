import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('api/request/GetUserInfo', async () => {
  const body = { LoadProfile: true, LoadMenu: true, LoadProfilePicture: true };
  const response = await axios.post('/api/request/GetUserInfo', body);
  return response;
});
export const fetchResultCode = createAsyncThunk('api/request/GetResultCodes', async () => {
  const body = {};
  const response = await axios.post('/api/request/GetResultCodes', body);
  return response;
});
