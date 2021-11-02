import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalModalSliceStateProps {
  isVisible: boolean;
  content: 'take_loan' | 'change_password' | 'edit_personal_information';
}

const initialState: GlobalModalSliceStateProps = {
  isVisible: false,
  content: 'take_loan',
};

export const globalModalSlice = createSlice({
  name: 'globalModalState',
  initialState,
  reducers: {
    showGlobalModal: (state, action: PayloadAction<GlobalModalSliceStateProps['content']>) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    resetGlobalModal: () => initialState,
  },
});

export const { showGlobalModal, resetGlobalModal } = globalModalSlice.actions;

export default globalModalSlice.reducer;
