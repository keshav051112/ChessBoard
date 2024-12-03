
import { createSlice } from "@reduxjs/toolkit";


const initialState = Array(8)
  .fill(null)
  .map((_, rowIndex) =>
    Array(8)
      .fill(null)
      .map((_, colIndex) => (rowIndex + colIndex) % 2 === 0 ? "white" : "black")
  );

const chessboardSlice = createSlice({
  name: "chessboard",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      const { row, col } = action.payload;
      if (state[row][col] === "white") {
        state[row][col] = "yellow"; 
      } else if (state[row][col] === "black") {
        state[row][col] = "red"; 
      }
    },
  },
});

export const { changeColor } = chessboardSlice.actions;

export default chessboardSlice.reducer;
