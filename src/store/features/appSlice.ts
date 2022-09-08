import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: true,
  id: 'de4ef374-ab8d-5be0-0d4b-3a052921c73f',
  name: 'Admin',
  roles: ['admin'],
  userName: 'admin',
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    menuToggle: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchUser.pending, (state) => {
  //     state.loading = !state.loading;
  //   });
  //   builder.addCase(fetchUser.fulfilled, () => {});
  //   builder.addCase(fetchUser.rejected, (state) => {
  //     state.loading = false;
  //   });
  // },
});

export const { menuToggle } = appSlice.actions;
export default appSlice.reducer;
