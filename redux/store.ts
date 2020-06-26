import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { rootSaga } from './root-saga';


export type AppDispatch = typeof store.dispatch;

const sagaMiddleware = createSagaMiddleware();
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],

});
sagaMiddleware.run(rootSaga);
export default store;




// middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],