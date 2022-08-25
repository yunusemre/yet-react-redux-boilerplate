import { combineReducers } from 'redux';
import AppReducer from './appReducer';
import LoadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  loading: LoadingReducer,
  app: AppReducer,
});

export default rootReducer;
