import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from '../features/countries/countriesSlice';

export const store = configureStore({
  reducer: {
    country: countriesSlice,
  }
});
