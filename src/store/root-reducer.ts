import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './features/app-slice';
import authReducer from './features/auth/auth-slice';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export default rootReducer;
