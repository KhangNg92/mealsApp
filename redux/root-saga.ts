import {all, fork} from '@redux-saga/core/effects';
import {getMealsRootSaga} from './saga/mealsSaga';
import {getCategoriesRootSaga} from './saga/categoriesSaga';

const sagas = [...getMealsRootSaga, ...getCategoriesRootSaga];
export const rootSaga = function* () {
  yield all(sagas.map(fork));
};
