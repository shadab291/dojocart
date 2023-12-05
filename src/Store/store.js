import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use local storage by default
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import ordersReducer from './ordersSlice';
import searchReducer from './searchSlice';

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can blacklist or whitelist specific reducers
  // blacklist: ['reducerNameToExclude'],
  // whitelist: ['reducerNameToPersist'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
  orders: ordersReducer,
  search: searchReducer,
  // Add other reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store); // Create a persistor object

export default store;
