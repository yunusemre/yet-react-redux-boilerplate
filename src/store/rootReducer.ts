import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import loadingReducer from './features/loadingSlice';

const rootReducer = combineReducers({
  app: appReducer,
  loader: loadingReducer,
});

export default rootReducer;
