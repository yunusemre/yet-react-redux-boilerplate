import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import loginReducer from './features/auth/loginSlice';

const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
});

export default rootReducer;
