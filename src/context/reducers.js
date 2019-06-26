const reducer1 = (state, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      console.log("player reducer state ", state);
      state.players.push(action.payload);
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
