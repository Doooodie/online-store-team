import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Cart = {
  id: number;
  price: number;
  count: number;
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
        count: action.payload.count,
      });
    },
    removeFromCart(state, action: PayloadAction<Cart>) {
      const currentState = state;
      currentState.products = state.products.filter((product) => product.id !== action.payload.id);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
export type { Cart };
