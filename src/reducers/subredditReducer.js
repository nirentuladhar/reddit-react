import {
  FETCH_SUBREDDIT_POSTS,
  SET_SUBREDDIT,
  SET_SORT_BY,
  SET_LINKS_FROM
} from "../actions/types";

const initialState = {
  name: "askreddit",
  posts: [],
  sortBy: "hot",
  linksFrom: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBREDDIT_POSTS:
      return {
        ...state,
        posts: action.payload.data.data.children
      };
    case SET_SUBREDDIT:
      return {
        ...state,
        name: action.payload
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      };
    case SET_LINKS_FROM:
      return {
        ...state,
        linksFrom: action.payload
      };
    default:
      return state;
  }
};
