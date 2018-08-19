import React, { Component } from "react";
import Posts from "./components/posts";
import NavBar from "./components/navbar";
import axios from "axios";

const PATH_BASE = "https://www.reddit.com/r/";
const PATH_SUBREDDIT = "askreddit";
const PATH_SUFFIX = ".json";

class App extends Component {
  state = {
    posts: [],
    subredditKey: PATH_SUBREDDIT,
    error: ""
  };
  componentDidMount() {
    this.fetchSubredditPosts(this.state.subredditKey);
  }
  render() {
    return (
      <React.Fragment>
        <NavBar subredditKey={this.state.subredditKey} />
        <div className="container">
          <div className="row mt-5">
            <Posts posts={this.state.posts} />
          </div>
        </div>
      </React.Fragment>
    );
  }
  setPosts = result => {
    this.setState({ posts: result.data.children });
  };
  fetchSubredditPosts = subredditKey => {
    axios(`${PATH_BASE}${subredditKey}${PATH_SUFFIX}`)
      .then(result => this.setPosts(result.data))
      .catch(error => this.setState({ error }));
  };
}

export default App;
