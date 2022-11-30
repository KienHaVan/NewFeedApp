import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchFeedList = createAsyncThunk(
  'feed/fetchFeedList',
  async () => {
    try {
      const response = await fetch();
    } catch (error) {}
  },
);
