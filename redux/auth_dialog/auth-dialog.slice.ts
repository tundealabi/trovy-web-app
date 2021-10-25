import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthDialogSliceStateProps {
  isVisible: boolean;
  content: 'login' | 'signup';
}

const initialState: AuthDialogSliceStateProps = {
  isVisible: false,
  content: 'login',
};

export const authDialogSlice = createSlice({
  name: 'authDialogState',
  initialState,
  reducers: {
    showAuthDialog: (state, action: PayloadAction<AuthDialogSliceStateProps['content']>) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    resetAuthDialog: () => initialState,
  },
});

export const { showAuthDialog, resetAuthDialog } = authDialogSlice.actions;

export default authDialogSlice.reducer;
