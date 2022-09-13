import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { loginService } from './loginService';

const initialState = {
  loading: false,
  token: null,
  expires: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    redirectHome: () => {
      const navigate = useNavigate();
      navigate('/');
    },

    loginRedirect: () => {
      const navigate = useNavigate();
      navigate('/auth/login');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginService.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginService.fulfilled, (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
      state = { ...state, ...payload };
    });
    builder.addCase(loginService.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { redirectHome, loginRedirect } = loginSlice.actions;
export default loginSlice.reducer;
