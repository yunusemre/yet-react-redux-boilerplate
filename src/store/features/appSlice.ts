import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: true,
  name: 'Admin',
  loading: false,
  permissions: { dashboard: true },
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
    getPermissions: (state) => {
      state.permissions = { dashboard: !state.permissions.dashboard };
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

export const { menuToggle, openMenu, getPermissions } = appSlice.actions;
export default appSlice.reducer;
