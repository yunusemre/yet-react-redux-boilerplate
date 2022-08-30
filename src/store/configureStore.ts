import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

// const persistConfig = {
//   key: 'app',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
  devTools: process.env.NODE_ENV !== 'production',
});

// export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
