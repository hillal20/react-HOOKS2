import React, { useContext, useState } from "react";
import context from "../context/context";
import io from "socket.io-client";

const Movies = () => {
  const [msg, setMsg] = useState("hilal");
  const socket = io.connect("http://localhost:4000");
  console.log("socket ====> ", socket);
  // setInterval(() => {
  //   socket.emit("msg", "hello  word ");
  // }, 2000);

  socket.on("msgBack", message => {
    console.log("massage ====> ", message);
    setMsg(message);
  });

  const appState = useContext(context);

  const { dispatchMovie } = appState;

  const [title, setTitle] = useState({ title: "" });
  const [year, setYear] = useState({ year: "" });
  const [type, setType] = useState({ type: "" });
  const [allMovies, setAllMovies] = useState({ movies: [] });

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

  let showMovies = [];
  if (allMovies.movies !== undefined) {
    showMovies = allMovies.movies;
  }

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
      <div>
        <h2>Socket.io is here </h2>
        MASSAGE:{msg}
      </div>
    </div>
  );
};

export default React.memo(Movies);
