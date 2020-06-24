import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Categories {
  id: string;
  title: string;
  color: string;
}

interface CategoriesState {
  categories: Categories[];
  isLoading: boolean;
  error: string;
}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: '',
};

function startLoading(state: CategoriesState) {
  state.isLoading = true;
}

const categoriesSlice = createSlice({
  name: 'issuesDisplay',
  initialState,
  reducers: {
    getCategoriesStart: startLoading,
    getCategoriesSuccess: (state, action: PayloadAction<Categories[]>) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    getCategoriesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
