import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  couple: [],
  error: "",
};

//generate pending, fulfilled, and rejected action types
export const fetchCouple = createAsyncThunk("couple/fetchCouple", () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/?starts_with=couple-info`, {
      params: {
        token: process.env.NEXT_PUBLIC_API_TOKEN,
        version: "draft",
      },
      timeout: 5000,
    })
    .then((response) => response.data.stories[0].content);
});

export const coupleSlice = createSlice({
  name: "couple",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCouple.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCouple.fulfilled, (state, action) => {
      state.loading = false;
      state.couple = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCouple.rejected, (state, action) => {
      state.loading = false;
      state.couple = [];
      state.error = action.error.message;
    });
  },
});

export default coupleSlice.reducer;
