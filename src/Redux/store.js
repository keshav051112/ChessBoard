
import { configureStore } from "@reduxjs/toolkit";
import chessboardReducer from "./slices/chessboardSlice";

const store = configureStore({
  reducer: {
    chessboard: chessboardReducer,
  },
});

export default store;
