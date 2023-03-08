import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
      const response = await fetch("https://www.reddit.com/hot.json");
      const json = await response.json();
      return json.data.children.map((post) => post.data);
    }
  );


const initialState = {
    isLoading: false,
    data: {
        
    }
  };

  export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder
        .addCase(getPosts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
        })
        .addCase(getPosts.rejected, (state) => {
            state.isLoading = false;
        });
    },
  });

  export default postsSlice.reducer;
  
  export const selectPosts = (state) => state.posts.data;
  export const isLoadingPosts = (state) => state.posts.isLoading;