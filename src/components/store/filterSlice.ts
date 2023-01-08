import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IFilter = {
  query?: string;
  sort?: string;
  category?: string[] | string;
  brand?: string[] | string;
};

const initialState: IFilter = {};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      const currentState = state;
      if (action.payload.length) {
        currentState.query = action.payload;
      } else if (currentState.query) {
        delete currentState.query;
      }
    },
    setSort(state, action: PayloadAction<string>) {
      const currentState = state;
      if (action.payload !== 'default') {
        currentState.sort = action.payload;
      } else if (currentState.sort) {
        delete currentState.sort;
      }
    },
    setCategory(state, action) {
      const currentState = state;
      const category: string[] = action.payload;
      if (category[0] === 'reset') {
        delete currentState.category;
        return;
      }
      if (category.length > 1) {
        currentState.category = [...category];
        return;
      }
      if (category.length === 1) {
        if (currentState.category && Array.isArray(currentState.category)) {
          if (currentState.category.indexOf(category[0]) > -1) {
            currentState.category.splice(currentState.category.indexOf(category[0]), 1);
            if (!currentState.category.length) delete currentState.category;
          } else {
            currentState.category.push(category[0]);
          }
        } else {
          currentState.category = [category[0]];
        }
      }
    },
    setBrand(state, action) {
      const currentState = state;
      const category: string[] = action.payload;
      if (category[0] === 'reset') {
        delete currentState.brand;
        return;
      }
      if (category.length > 1) {
        currentState.brand = [...category];
        return;
      }
      if (category.length === 1) {
        if (currentState.brand && Array.isArray(currentState.brand)) {
          if (currentState.brand.indexOf(category[0]) > -1) {
            currentState.brand.splice(currentState.brand.indexOf(category[0]), 1);
            if (!currentState.brand.length) delete currentState.brand;
          } else {
            currentState.brand.push(category[0]);
          }
        } else {
          currentState.brand = [category[0]];
        }
      }
    },
    resetFilter(state, action) {
      const currentState = state;
      if (action.payload) {
        if (currentState.query) delete currentState.query;
        if (currentState.sort) delete currentState.sort;
        if (currentState.category) delete currentState.category;
        if (currentState.brand) delete currentState.brand;
      }
    },
  },
});

export const { setQuery, setSort, setCategory, setBrand, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
