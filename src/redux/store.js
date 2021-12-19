import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
/* import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'; */

import phonebookReducer from './phonebook/phonebook-reducer';

/* const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]; */

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

//const persistor = persistStore(store);

export { store };
