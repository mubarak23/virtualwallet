import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from './auth/authSlice';
import paymentReducer from './payment/paymentSlice';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
const reducers = combineReducers({
  auth: authReducer,
  payment: paymentReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
