import React, { useContext, useEffect, useState } from "react";
import context from "../context/context";

function Players() {
  const appState = useContext(context);
  // console.log("appState in players ===>  ", appState);
  const [name, setName] = useState({ name: "" });
  const [role, setRole] = useState({ role: "" });
  const [number, setNumber] = useState({ number: "" });
  const [allPlayers, setAllPlayers] = useState({ players: [] });

  const eventHandler = e => {
    e.target.name === "name" && setName({ [e.target.name]: e.target.value });
    e.target.name === "role" && setRole({ [e.target.name]: e.target.value });
    e.target.name === "number" &&
      setNumber({ [e.target.name]: e.target.value });
  };
  const { dispatchPlayer, reducerPlayersState } = appState;
  const obj = {
    name: name.name,
    role: role.role,
    number: number.number
  };

  const addPlayer = () => {
    dispatchPlayer({ type: "ADD_PLAYER", payload: obj });
    setAllPlayers(reducerPlayersState);
    setNumber({ number: "" });
    setRole({ role: "" });
    setName({ name: "" });
  };
  // localStorage.setItem("reducerPlayersState", reducerPlayersState);

  // const saveStateToLS =  (allPlayers.players) => {
  //   if ((reducerPlayersState.players.length = 0)) {
  //     return;
  //   }
  //   try {
  //     const reducerPlayersStateLS = JSON.stringify(reducerPlayersState);
  //     localStorage.setItem("reducerPlayersState", reducerPlayersStateLS);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // saveStateToLS(reducerPlayersState);

  // const getStateFomLS = () => {
  //   try {
  //     const localStoragePlayers = localStorage.getItem("reducerPlayersState");
  //     if (localStoragePlayers === null) {
  //       return undefined;
  //     }

  //     return JSON.parse(localStoragePlayers);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const players = getStateFomLS() || [];

  localStorage.setItem("pl", allPlayers.players);
  console.log(localStorage);
  return (
    <div className="players">
      <h2>Players </h2>
      {allPlayers.players.map((player, i) => {
        return (
          <div key={i}>
            {" "}
            <div> {player.name}</div>
            <div> {player.role}</div>
            <div> {player.number}</div>
          </div>
        );
      })}
      <input
        placeholder="name"
        name="name"
        value={name.name || ""}
        onChange={eventHandler}
      />

      <input
        placeholder="number"
        name="number"
        value={number.number || ""}
        onChange={eventHandler}
      />
      <input
        placeholder=" role"
        name="role"
        value={role.role || ""}
        onChange={eventHandler}
      />

      <button onClick={addPlayer}> Add Player </button>
    </div>
  );
}

export default Players;
