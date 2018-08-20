export const setSortBy = ({ sortBy } = {}) => ({
  type: "SET_SORT_BY",
  sortBy
});

export const setLinksFrom = ({ linksFrom } = {}) => ({
  type: "SET_LINKS_FROM",
  linksFrom
});

export const setSubreddit = subreddit => ({
  type: "SET_SUBREDDIT",
  subreddit
});
