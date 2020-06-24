import {call, put, takeEvery} from '@redux-saga/core/effects';
import axios from 'axios';
import {
  getMealsSuccess,
  getMealsFailure,
  getMealsStart,
} from '../slices/mealsSlice';
import {API} from '../../utils/api';

const watchGetMeals = function* () {
  yield takeEvery(getMealsStart.type, getMealsSaga);
};

const getMealsSaga = function* () {
  try {
    const {data} = yield call(() => axios.get(`${API}/meals`));
    console.log({data});
    yield put(getMealsSuccess(data));
  } catch (error) {
    yield put(getMealsFailure(error));
  }
};

export const getMealsRootSaga = [watchGetMeals];
