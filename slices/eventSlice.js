import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  events: [],
  error: "",
};

//generate pending, fulfilled, and rejected action types
export const fetchEvents = createAsyncThunk("event/fetchEvents", () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/?starts_with=event-info`, {
      params: {
        token: process.env.NEXT_PUBLIC_API_TOKEN,
        version: "draft",
      },
      timeout: 5000,
    })
    .then((response) => response.data.stories.reverse());
});

export const eventSlice = createSlice({
  name: "event",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.events = action.payload;
      state.error = "";
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loading = false;
      state.events = [];
      state.error = action.error.message;
    });
  },
});

export default eventSlice.reducer;
