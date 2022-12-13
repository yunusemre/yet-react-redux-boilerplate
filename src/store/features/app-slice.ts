import { menus } from '@layout/sidebar/menu-data';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchResultCode, fetchUser } from './app-service';

export interface AppStateType {
  menuOpen: boolean;
  isLogin: boolean;
  name: string;
  loading: boolean;
  permissions: any;
  menus: any;
  resultCode: any;
}

const initialState: AppStateType = {
  menuOpen: true,
  isLogin: false,
  name: 'Admin',
  loading: false,
  permissions: {},
  menus: menus[0].children,
  resultCode: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    menuToggle: (state) => {
      state.menuOpen = !state.menuOpen;
    },
    menuUpdate: (state, action: PayloadAction<{ path: string; expanded: boolean }>) => {
      const todo = state.menus.find((mn: any) => mn.path === action.payload.path);
      todo.data.menu.expanded = action.payload.expanded;
    },
    openMenu: (state) => {
      state.menuOpen = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }: PayloadAction<any>) => {
      const permissionLists: any = {};
      payload.Payload.AllowedResources.map((res: string) => (permissionLists[res] = true));
      state.permissions = permissionLists;
      state.isLogin = true;
      state.name = `${payload.Payload.FirstName} ${payload.Payload.LastName} `;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.isLogin = false;
      state.loading = false;
    });
    builder.addCase(fetchResultCode.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.resultCode = payload.Payload;
    });
  },
});

export const { menuToggle, openMenu, menuUpdate } = appSlice.actions;
export default appSlice.reducer;
