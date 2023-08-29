import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  slides: [],
  error: "",
};

//generate pending, fulfilled, and rejected action types
export const fetchSlides = createAsyncThunk("slides/fetchSlides", () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/?starts_with=hero-slider`, {
      params: {
        token: process.env.NEXT_PUBLIC_API_TOKEN,
        version: "draft",
      },
      timeout: 5000,
    })
    .then((response) => response.data.stories);
});

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSlides.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSlides.fulfilled, (state, action) => {
      state.loading = false;
      state.slides = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSlides.rejected, (state, action) => {
      state.loading = false;
      state.slides = [];
      state.error = action.error.message;
    });
  },
});

export default slideSlice.reducer;
