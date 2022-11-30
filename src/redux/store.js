import {configureStore} from '@reduxjs/toolkit';
import feedSlice from './feedSlice';

const store = configureStore({
  reducer: {
    feed: feedSlice,
  },
});

export default store;
