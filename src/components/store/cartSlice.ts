import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Cart = {
  id: number;
  price: number;
  count: number;
};

type CartState = {
  products: Cart[];
};

type Counter = {
  id: number;
  productStock?: number;
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
    addCount(state, action: PayloadAction<Counter>) {
      const thisProduct = state.products.find((product) => product.id === action.payload.id);
      const stock = action.payload.productStock as number;
      if (thisProduct && thisProduct.count < stock) {
        thisProduct.count += 1;
      }
    },
    substractCount(state, action: PayloadAction<Counter>) {
      const thisProduct = state.products.find((product) => product.id === action.payload.id);
      if (thisProduct) thisProduct.count -= 1;
    },
    clearCart(state, action: PayloadAction<boolean>) {
      const thisProduct = state.products;
      if (action.payload) {
        while (thisProduct.length) {
          thisProduct.pop();
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, addCount, substractCount, clearCart } = cartSlice.actions;
