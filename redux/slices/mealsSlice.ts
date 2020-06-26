import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export type FilterState = {
  lactoseFree: boolean,
  gluttenFree: boolean,
  vegan: boolean,
  vegetarian: boolean,
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
    toggleFavorite: (state, action: PayloadAction<string>, ) => {
      const foundIndex = state.favoriteMeals.findIndex(meal => meal.id === action.payload)
      const meal = state.meals.find(meal => meal.id === action.payload)
      const favoriteMeals = [...state.favoriteMeals]
      favoriteMeals.splice(foundIndex, 1);
      if (foundIndex >= 0) {
        return { ...state, favoriteMeals }
      }

      return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }
    },
    setFilters: (state, action: PayloadAction<FilterState>) => {
      const filteredMeals = state.meals.filter(meal => {
        const { lactoseFree,
          gluttenFree,
          vegan,
          vegetarian, } = action.payload
        if (gluttenFree && !meal.isGlutenFree) {
          return false
        }
        if (lactoseFree && !meal.isLactoseFree) {
          return false
        }
        if (vegetarian && !meal.isVegetarian) {
          return false
        }
        if (vegan && !meal.isVegan) {
          return false;
        }
        return true;
      })

      return { ...state, filteredMeals }
    }
  },
});

export const {
  getMealsStart,
  getMealsSuccess,
  getMealsFailure,
  toggleFavorite,
  setFilters
} = mealsSlice.actions;

export default mealsSlice.reducer;
