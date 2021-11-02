import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contador from './contador';
import modal from './modal';
// import logger from './middleware/logger';
import login from './login';
import photos from './photos';
import localStorage from './middleware/localStorage';

const reducer = combineReducers({ contador, modal, login, photos });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    localStorage,
  ],
});

export default store;
