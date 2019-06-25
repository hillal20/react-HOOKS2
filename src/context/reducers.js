const initialState1 = [];
const reducer1 = (state = initialState1, action) => {
  switch (action.type) {
    case "ADD_PLAYER":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
};

// const initialState2 = [];
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
