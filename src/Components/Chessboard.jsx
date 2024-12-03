
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../Redux/slices/chessboardSlice";

const Chessboard = () => {
  const dispatch = useDispatch();
  const board = useSelector((state) => state.chessboard);

  const handleClick = (row, col) => {
    dispatch(changeColor({ row, col }));
  };

  return (
    <div className="grid grid-cols-8 gap-0">
      {board.map((row, rowIndex) =>
        row.map((square, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            onClick={() => handleClick(rowIndex, colIndex)}
            className={`w-16 h-16 ${
              square === "white"
                ? "bg-white"
                : square === "black"
                ? "bg-black"
                : square === "yellow"
                ? "bg-yellow-500"
                : "bg-red-500"
            } border border-gray-300`}
          />
        ))
      )}
    </div>
  );
};

export default Chessboard;
