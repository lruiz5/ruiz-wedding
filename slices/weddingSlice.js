import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  wedding: {},
  error: "",
};

//generate pending, fulfilled, and rejected action types
export const fetchWedding = createAsyncThunk("wedding/fetchWedding", () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/?starts_with=wedding-info`, {
      params: {
        token: process.env.NEXT_PUBLIC_API_TOKEN,
        version: "draft",
      },
      timeout: 5000,
    })
    .then((response) => response.data.stories[0].content);
});

export const weddingSlice = createSlice({
  name: "wedding",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchWedding.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWedding.fulfilled, (state, action) => {
      state.loading = false;
      state.wedding = action.payload;
      state.error = "";
    });
    builder.addCase(fetchWedding.rejected, (state, action) => {
      state.loading = false;
      state.wedding = {};
      state.error = action.error.message;
    });
  },
});

export default weddingSlice.reducer;
