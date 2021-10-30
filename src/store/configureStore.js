import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contador from './contador';
import modal from './modal';
// import logger from './middleware/logger';
import login from './login';

const reducer = combineReducers({ contador, modal, login });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
