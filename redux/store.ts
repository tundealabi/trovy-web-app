import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authDialogSliceReducer from './auth_dialog/auth-dialog.slice';
import globalModalSliceReducer from './global_modal/global-modal.slice';
import snackbarSliceReducer from './snackbar/snackbar.slice';

const middlewares = [...getDefaultMiddleware()];
if (process.env.NODE_ENV !== 'production') middlewares.push(logger);

export const store = configureStore({
  reducer: {
    authDialog: authDialogSliceReducer,
    globalModal: globalModalSliceReducer,
    snackbar: snackbarSliceReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
