import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  portfolio: [],
  error: "",
};

//generate pending, fulfilled, and rejected action types
export const fetchPortfolio = createAsyncThunk(
  "portfolio/fetchPortfolio",
  () => {
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/?starts_with=portfolios`, {
        params: {
          token: process.env.NEXT_PUBLIC_API_TOKEN,
          version: "draft",
        },
        timeout: 5000,
      })
      .then((response) => response.data.stories[0].content.portfolio);
  }
);

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPortfolio.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPortfolio.fulfilled, (state, action) => {
      state.loading = false;
      state.portfolio = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPortfolio.rejected, (state, action) => {
      state.loading = false;
      state.portfolio = [];
      state.error = action.error.message;
    });
  },
});

export default portfolioSlice.reducer;
