const reducers = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SUBREDDIT":
      return action.subreddit;
    default:
      return state;
  }
};

export default reducers;
