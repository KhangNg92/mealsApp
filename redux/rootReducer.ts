import {combineReducers} from 'redux';

import mealsSliceReducer from './slices/mealsSlice';
import categoriesSliceReducer from './slices/categoriesSlice';

const rootReducer = combineReducers({
  meals: mealsSliceReducer,
  categories: categoriesSliceReducer,
});

export default rootReducer;
