import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    start: (state) => (state.loading = true),
    stop: (state) => (state.loading = false),
    clear: (state) => (state = {}),
  },
});

export default loadingSlice.reducer;
export const { start, stop, clear } = loadingSlice.actions;
