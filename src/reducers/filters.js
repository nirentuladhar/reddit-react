const filtersReducerDefaultState = {
  subreddit: "askreddit",
  sortBy: "hot",
  linksFrom: "past hour"
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.sortBy
      };
    case "SET_LINKS_FROM":
      return {
        ...state,
        linksFrom: action.linksFrom
      };
    case "SET_SUBREDDIT":
      return {
        ...state,
        subreddit: action.subreddit
      };
    default:
      return state;
  }
};
