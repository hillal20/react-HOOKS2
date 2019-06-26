const reducer1 = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      state.players.push(action.payload);
      console.log("player reducer state ", state);
      let pl = localStorage.getItem("playersState");
      pl = JSON.parse(pl);
      const LSSate = { players: [...state.players] };
      localStorage.setItem("playersState", JSON.stringify(LSSate));

      return state;

    case "DELETE_PLAYER":
      state.players.splice(parseInt(action.payload), 1);
      localStorage.setItem("playersState", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

const reducer2 = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      console.log("action p ===> ", action.payload);

      const obj = Object.values(action.payload);
      let movie = { title: obj[0].title, year: obj[1].year, type: obj[2].type };
      console.log("movie ===> ", movie);
      state.movies.push(movie);
      return state;
    default:
      return state;
  }
};

module.exports = { reducer1, reducer2 };
