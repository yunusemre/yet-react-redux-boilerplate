import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateType } from './auth-type';

const initialState: AuthStateType = {
  isSuccess: false,
  loading: false,
  access_token: '',
  expires_in: '',
  setting_password_required: '',
  token_type: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.access_token = '';
      state.expires_in = '';
      state.setting_password_required = '';
      state.token_type = '';
      state.loading = false;
      state.isSuccess = false;
    },
    loginPending: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }: PayloadAction<AuthStateType>) => {
      state.access_token = payload.access_token;
      state.expires_in = payload.expires_in;
      state.setting_password_required = payload.setting_password_required;
      state.token_type = payload.token_type;
      state.loading = false;
      state.isSuccess = true;
    },
    loginFailure: (state) => {
      state.isSuccess = false;
      state.loading = false;
    },
  },
});

export const { logout, loginPending, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
