import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getPost = createAsyncThunk('post/getPost', async () => {
  return await fetch(
      'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
  ).then((res) => res.json());
});

const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
