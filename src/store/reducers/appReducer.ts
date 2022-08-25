import { createReducer } from '@reduxjs/toolkit';
import AppActions from '../actions/appActions';

const initialState = {
  user: 'kolay gelsin',
};

export default createReducer(initialState, (builder) =>
  builder.addCase(AppActions.setAppConfig, (state: any, action: any) => (state = action.payload))
);
