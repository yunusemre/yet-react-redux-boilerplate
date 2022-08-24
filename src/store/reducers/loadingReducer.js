import { createReducer } from '@reduxjs/toolkit';
import LoadingActions from '../actions/loadingActions';

const initialState = { loading: false };

export default createReducer(initialState, (builder) =>
  builder
    .addCase(LoadingActions.start, (state) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(LoadingActions.stop, (state) => {
      state.loading = false;
    })
    .addCase(LoadingActions.clear, () => ({}))
);
