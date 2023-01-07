import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IFilter = {
  query: string;
  sort: string;
};

const initialState: IFilter = {
  query: '',
  sort: 'default',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      const currentState = state;
      currentState.query = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      const currentState = state;
      currentState.sort = action.payload;
    },
  },
});

export const { setQuery, setSort } = filterSlice.actions;
export default filterSlice.reducer;
