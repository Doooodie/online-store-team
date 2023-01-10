import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  isOpened: boolean;
};

const initialState: ModalState = {
  isOpened: false,
};

const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    changeModalVisibility(state, action: PayloadAction<ModalState>) {
      const currentState = state;
      currentState.isOpened = action.payload.isOpened;
    },
  },
});

export default ModalSlice.reducer;
export const { changeModalVisibility } = ModalSlice.actions;
