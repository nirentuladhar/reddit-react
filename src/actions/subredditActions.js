import {
  FETCH_SUBREDDIT_POSTS,
  SET_SUBREDDIT,
  SET_SORT_BY,
  SET_LINKS_FROM
} from "./types";
import axios from "axios";

export const fetchSubredditPosts = () => dispatch => {
  axios("https://www.reddit.com/r/askreddit.json").then(result => {
    dispatch({
      type: FETCH_SUBREDDIT_POSTS,
      payload: result
    });
  });
};

export const setSubreddit = subredditName => dispatch => {
  axios(`https://www.reddit.com/r/${subredditName}.json`).then(result => {
    dispatch({
      type: FETCH_SUBREDDIT_POSTS,
      payload: result
    });
  });
  dispatch({
    type: SET_SUBREDDIT,
    payload: subredditName
  });
};

export const setSortBy = sortBy => dispatch => {
  dispatch({
    type: SET_SORT_BY,
    payload: sortBy
  });
};

export const setLinksFrom = linksFrom => dispatch => {
  dispatch({
    type: SET_LINKS_FROM,
    payload: linksFrom
  });
};
