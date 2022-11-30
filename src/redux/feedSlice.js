import {createSlice} from '@reduxjs/toolkit';

const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    feedList: [],
    ExploreList: [],
  },
  reducers: {
    addFeedList: (state, action) => {
      state.feedList = [...action.payload];
    },
    addExploreList: (state, action) => {
      state.ExploreList = [...action.payload];
    },
    toggleSavedStatus: (state, action) => {
      state.feedList.map(item => {
        if (item.id === action.payload) {
          item.saved = !item.saved;
        }
      });
    },
  },
});
export const {addFeedList, toggleSavedStatus, addExploreList} =
  feedSlice.actions;
export default feedSlice.reducer;
