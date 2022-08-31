import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  emailVerified: false,
  id: 'de4ef374-ab8d-5be0-0d4b-3a052921c73f',
  isAuthenticated: false,
  name: 'Admin',
  phoneNumber: null,
  phoneNumberVerified: false,
  roles: ['admin'],
  userName: 'admin',
  todoList: [],
  loading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    update: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
    setTodoList: (state, action: PayloadAction<any>) => {
      state.todoList = action.payload;
    },
  },
});

export const { update, setTodoList } = appSlice.actions;
export default appSlice.reducer;
