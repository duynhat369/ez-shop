import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/Auth/userSlice';
import counterReducer from 'features/Counter/counterSlice';
import cartReducer from 'features/Cart/cartSlice';

const rootReducer = {
  count: counterReducer,
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
