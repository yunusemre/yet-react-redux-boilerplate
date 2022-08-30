import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: `Kolay gelsin -> ${new Date().toLocaleDateString()}`,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
