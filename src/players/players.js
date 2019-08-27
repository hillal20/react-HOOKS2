import React, { useContext, useEffect, useState } from "react";
import context from "../context/context";

function Players() {
  console.log(" I am here 1 ....");

  const appState = useContext(context);
  const [name, setName] = useState({ name: "" });
  const [role, setRole] = useState({ role: "" });
  const [number, setNumber] = useState({ number: "" });
  const [allPlayers, setAllPlayers] = useState({ players: [] });

  const eventHandler = e => {
    e.target.name === "name" && setName({ name: e.target.value });
    e.target.name === "role" && setRole({ role: e.target.value });
    e.target.name === "number" && setNumber({ number: e.target.value });
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

  const deletePlayer = index => {
    alert("deleting ...");
    dispatchPlayer({ type: "DELETE_PLAYER", payload: index });
    setAllPlayers(reducerPlayersState);
    setNumber({ number: "" });
    setRole({ role: "" });
    setName({ name: "" });
  };

  let pl = [];
  useEffect(() => {
    console.log(" i am here  2 .....");

    return () => {
      console.log(" run before the useEffect runs for 2nd time");
    };
  }, [name]);

  // useEffect(() => {
  //   return () => {
  //     console.log("component unmounted ...");
  //   };
  // }, []);
  pl = localStorage.getItem("playersState");
  pl = JSON.parse(pl);

  console.log("pl ===> ", pl);
  return (
    <div className="players">
      <h2>Players </h2>
      {pl !== null &&
        pl.players.map((player, i) => {
          return (
            <div key={i}>
              {" "}
              <div> {player.name}</div>
              <div> {player.role}</div>
              <div> {player.number}</div>
              <div>
                <button
                  onClick={() => {
                    deletePlayer(i);
                  }}
                >
                  Delete A player
                </button>
              </div>
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
