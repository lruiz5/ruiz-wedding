import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./slices/sliderSlice";
import portfolioReducer from "./slices/portfolioSlice";
import eventReducer from "./slices/eventSlice";
import storyReducer from "./slices/storySlice";
import coupleReducer from "./slices/coupleSlice";
import weddingReducer from "./slices/weddingSlice";

export const store = configureStore({
  reducer: {
    slide: slideReducer,
    portfolio: portfolioReducer,
    event: eventReducer,
    story: storyReducer,
    couple: coupleReducer,
    wedding: weddingReducer,
  },
});
