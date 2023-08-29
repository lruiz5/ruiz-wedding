import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  story: [],
  error: "",
};

//generate pending, fulfilled, and rejected action types
export const fetchStory = createAsyncThunk("story/fetchStory", () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/?starts_with=couple-story`, {
      params: {
        token: process.env.NEXT_PUBLIC_API_TOKEN,
        version: "draft",
      },
      timeout: 5000,
    })
    .then((response) => response.data.stories.reverse());
});

export const storySlice = createSlice({
  name: "story",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStory.fulfilled, (state, action) => {
      state.loading = false;
      state.story = action.payload;
      state.error = "";
    });
    builder.addCase(fetchStory.rejected, (state, action) => {
      state.loading = false;
      state.story = [];
      state.error = action.error.message;
    });
  },
});

export default storySlice.reducer;
