import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const responseVariable = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  );
  if (!responseVariable.ok) {
    throw new Error("Błąd podczas pobierania danych");
  }
  const dataVariable = await responseVariable.json();
  return dataVariable;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle", //idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "loading";
        state.error = null;
      });
  },
});

export default postsSlice.reducer;
