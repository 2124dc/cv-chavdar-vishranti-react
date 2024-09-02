// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'; // Example slice
import hotelReducer from '../features/hotels/hotelSlice'; // Example slice

const store = configureStore({
  reducer: {
    auth: authReducer,
    hotels: hotelReducer,
    // Add more slices here as needed
  },
});

export default store;
