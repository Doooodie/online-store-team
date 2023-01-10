import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Promo = {
  id: number;
  discount: number;
};

type PromoState = {
  codes: Promo[];
};

const initialState: PromoState = {
  codes: [],
};

const PromoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    addPromo(state, action: PayloadAction<Promo>) {
      state.codes.push({
        id: action.payload.id,
        discount: action.payload.discount,
      });
    },
    removePromo(state, action: PayloadAction<Promo>) {
      const currentState = state;
      currentState.codes = state.codes.filter((product) => product.id !== action.payload.id);
    },
  },
});

export default PromoSlice.reducer;
export const { addPromo, removePromo } = PromoSlice.actions;
export type { Promo };
