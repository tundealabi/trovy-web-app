import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authDialogSliceReducer from './auth_dialog/auth-dialog.slice';

const middlewares = [...getDefaultMiddleware()];
if (process.env.NODE_ENV !== 'production') middlewares.push(logger);

export const store = configureStore({
  reducer: {
    authDialog: authDialogSliceReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
