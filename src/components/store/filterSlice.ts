import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IFilter = {
  query?: string;
  sort?: string;
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
  },
});

export const { setQuery, setSort } = filterSlice.actions;
export default filterSlice.reducer;
