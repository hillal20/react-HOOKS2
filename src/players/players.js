import React, { useContext } from "react";
import context from "../context/context";

function Players() {
  const appState = useContext(context);
  // console.log("appState  in players ===> ", appState);
  return (
    <div className="players">
      <h2>Players </h2>
      <input placeholder="add player" />
      <button> Add Player </button>
    </div>
  );
}

export default Players;
