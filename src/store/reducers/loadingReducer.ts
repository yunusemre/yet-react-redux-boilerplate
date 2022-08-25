import { createReducer } from '@reduxjs/toolkit';
import LoadingActions from '../actions/loadingActions';

const initialState = { loading: false };

export default createReducer(initialState, (builder: any) =>
  builder
    .addCase(LoadingActions.start, (state: any) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(LoadingActions.stop, (state: any) => {
      state.loading = false;
    })
    .addCase(LoadingActions.clear, () => ({}))
);
