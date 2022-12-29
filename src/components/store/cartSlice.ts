import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Cart = {
  id: number;
  price: number;
};

type CartState = {
  products: Cart[];
};

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Cart>) {
      state.products.push({
        id: action.payload.id,
        price: action.payload.price,
      });
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
export type { Cart };
