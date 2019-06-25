import React, { useReducer } from "react";
import Players from "./players/players";
import Movies from "./movies/movies";
import "./App.css";
import context from "./context/context.js";
import { reducer1, reducer2 } from "./context/reducers.js";

function App() {
  const [reducerPlayersState, dispatchPlayer] = useReducer(reducer1, {
    players: []
  });
  const [reducerMoviesState, dispatchMovie] = useReducer(reducer2, {
    movies: []
  });

  return (
    <context.Provider
      value={{
        dispatchPlayer,
        reducerMoviesState,
        dispatchMovie,
        reducerPlayersState
      }}
    >
      <div className="App">
        <h2>React Hooks </h2>
        <Players />
        <Movies />
      </div>
    </context.Provider>
  );
}

export default App;
