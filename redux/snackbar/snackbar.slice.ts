import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SnackbarSliceStateProps {
  showSnackbar: boolean;
  snackbarContent: string;
  snackbarSeverity: AlertColor;
}

const initialState: SnackbarSliceStateProps = {
  showSnackbar: false,
  snackbarContent: '',
  snackbarSeverity: 'info',
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    activateSnackbar: (
      state,
      { payload }: PayloadAction<{ content: string; severity: AlertColor }>
    ) => {
      state.showSnackbar = true;
      state.snackbarContent = payload.content || 'Something went wrong!!';
      state.snackbarSeverity = payload.severity || 'error';
    },
    deactivateSnackbar: (state) => {
      state.showSnackbar = false;
    },
  },
});

export const { activateSnackbar, deactivateSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
