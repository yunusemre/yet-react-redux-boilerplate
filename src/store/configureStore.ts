import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  timeout: 0,
  whitelist: ['app'],
};

const devEnv = process.env.NODE_ENV === 'development';
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = devEnv ? [logger] : [];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
  devTools: devEnv,
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
