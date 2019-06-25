import React, { useContext, useState, useEffect } from "react";
import context from "../context/context";

function Movies() {
  const appState = useContext(context);
  let appState2;

  const { dispatchMovie, reducerMoviesState } = appState;

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [allMovies, setAllMovies] = useState([]);

  const eventHandler = e => {
    e.target.name === "title" && setTitle({ [e.target.name]: e.target.value });
    e.target.name === "year" && setYear({ [e.target.name]: e.target.value });
    e.target.name === "type" && setType({ [e.target.name]: e.target.value });
  };
  const addingMovie = () => {
    dispatchMovie({
      type: "ADD_MOVIE",
      payload: { title, year, type }
    });
    setAllMovies(appState.reducerMoviesState);
    setTitle("");
    setYear("");
    setType("");
  };
  console.log("appState  ===> ", appState.reducerMoviesState.movies);
  //   console.log("appState in movies ===> ", appState.reducerMoviesState);
  //   //   setAllMovies(reducerMoviesState.movies);

  console.log("allMovies ==> ", allMovies.movies);
  let showMovies = [];
  if (allMovies.movies !== undefined) {
    showMovies = allMovies.movies;
  }
  //   appState2 = useContext(context);
  useEffect(() => {}, [showMovies.length]);
  return (
    <div className="movies">
      <h2>Movies </h2>
      {showMovies.map((movie, i) => {
        return (
          <div key={i}>
            <div>{movie.title}</div>
            <div>{movie.year}</div>
          </div>
        );
      })}
      <input
        placeholder="movie title"
        value={title.title || ""}
        name="title"
        onChange={eventHandler}
      />

      <input
        placeholder="movie year"
        value={year.year || ""}
        name="year"
        onChange={eventHandler}
      />

      <input
        placeholder="movie type"
        value={type.type || ""}
        name="type"
        onChange={eventHandler}
      />

      <button onClick={addingMovie}> Add Movie</button>
    </div>
  );
}

export default React.memo(Movies);
