import React, { useReducer, useEffect, useState } from "react";
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

  // const [state, setAppSate] = useState([]);
  // if (reducerPlayersState.players[0] || reducerMoviesState.movies[0]) {
  //   setAppSate(reducerPlayersState, reducerMoviesState);
  // }

  // let appState = state;

  // const saveAppStateToLS = appState => {
  //   console.log("saving ....");
  //   console.log("appState  in players ===> ", appState);
  //   try {
  //     const newAppState = JSON.stringify(appState);
  //     localStorage.setItem("appState", newAppState);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // saveAppStateToLS(appState);

  // const getAppStateFomLS = () => {
  //   try {
  //     const appState = localStorage.getItem("appState");
  //     if (appState === null) {
  //       return undefined;
  //     }

  //     return JSON.parse(appState);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const appStateFromLS = getAppStateFomLS();

  // console.log("appStateFromLS ===> ", appStateFromLS);
  // const reducerMoviesState = appStateFromLS.reducerMoviesState1;
  // const reducerPlayersState = appStateFromLS.reducerPlayersState1;
  // console.log("reducerMoviesState ===> ", reducerMoviesState[0]);

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
