import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Meal {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

interface MealsState {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Array<any>;
  isLoading: boolean;
  error: string;
}

const initialState: MealsState = {
  meals: [],
  filteredMeals: [],
  favoriteMeals: [],
  isLoading: false,
  error: '',
};

function startLoading(state: MealsState) {
  state.isLoading = true;
}

const mealsSlice = createSlice({
  name: 'issuesDisplay',
  initialState,
  reducers: {
    getMealsStart: startLoading,
    getMealsSuccess: (state, action: PayloadAction<Meal[]>) => {
      state.isLoading = false;
      state.meals = action.payload;
    },
    getMealsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getMealsStart,
  getMealsSuccess,
  getMealsFailure,
} = mealsSlice.actions;

export default mealsSlice.reducer;
