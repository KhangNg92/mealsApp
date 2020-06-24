import {call, put, takeEvery} from '@redux-saga/core/effects';
import axios from 'axios';
import {API} from '../../utils/api';
import {
  getCategoriesSuccess,
  getCategoriesFailure,
  getCategoriesStart,
} from '../../redux/slices/categoriesSlice';

const watchGetCategories = function* () {
  yield takeEvery(getCategoriesStart.type, getCategories);
};

const getCategories = function* () {
  try {
    const {data} = yield call(() => axios.get(`${API}/categories`));
    yield put(getCategoriesSuccess(data));
  } catch (error) {
    yield put(getCategoriesFailure(error));
  }
};

export const getCategoriesRootSaga = [watchGetCategories];
