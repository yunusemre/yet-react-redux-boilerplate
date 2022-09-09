import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: true,
  name: 'Admin',
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    menuToggle: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    openMenu: (state) => {
      state.menuOpen = true;
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

export const { menuToggle, openMenu } = appSlice.actions;
export default appSlice.reducer;
