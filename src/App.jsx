// App.js
import React from "react";
import { Provider } from "react-redux";
import Chessboard from "./Components/Chessboard";
import store from "./Redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="p-4">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">Chess Board Game</h1>
          <Chessboard />
        </div>
      </div>
    </Provider>
  );
};

export default App;
