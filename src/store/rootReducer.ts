import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
