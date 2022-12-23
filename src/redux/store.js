import { configureStore ,getDefaultMiddleware, combineReducers} from "@reduxjs/toolkit";
import {contactsReducer} from "./contactsSlice/contactsSlice"
import { filtersReducer } from "./filterSlice/filterSlice";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';



const persistConfig = {
    key: 'contacts',
    storage: storage,
    whitelist: ['contacts'],
    version: 1,
  };

  const reducers = combineReducers({
    contacts: contactsReducer,
    filter: filtersReducer,
  });
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer:persistedReducer,
    
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),});

export const persistor = persistStore(store);
