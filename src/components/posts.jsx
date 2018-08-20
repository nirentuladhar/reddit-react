import React, { Component } from "react";
import Post from "./Post";
import { connect } from "react-redux";
import {
  fetchSubredditPosts,
  setSortBy,
  setLinksFrom
} from "../actions/subredditActions";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: ["hot", "top", "controversial", "recent", "rising"],
      linksFrom: [
        "past hour",
        "past day",
        "past week",
        "past month",
        "past year",
        "all time"
      ]
    };
  }
  componentWillMount() {
    this.props.fetchSubredditPosts();
  }

  onSortChange = e => {
    this.props.setSortBy(e.target.value);
  };
  onLinksChange = e => {
    this.props.setLinksFrom(e.target.value);
  };

  render() {
    const selectSortBy = (
      <React.Fragment>
        <label>Sort by:</label>
        <select
          className="custom-select mb-3"
          value={this.props.sortBy}
          onChange={this.onSortChange}
        >
          {this.state.sort.map(sortKey => (
            <option key={sortKey} value={sortKey}>
              {sortKey}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
    const selectLinksFrom = (
      <React.Fragment>
        <label>Links from:</label>
        <select
          className="custom-select mb-3"
          value={this.props.linksFrom}
          onChange={this.onLinksChange}
        >
          {this.state.linksFrom.map(link => (
            <option key={link} value={link}>
              {link}
            </option>
          ))}
        </select>
      </React.Fragment>
    );
    return (
      <div>
        <div className="col col-sm-12">
          <div className="row">
            <div className="col col-sm-4 col-lg-3">{selectSortBy}</div>
            {(this.props.sortBy === "top" ||
              this.props.sortBy === "controversial") && (
              <div className="col col-sm-4 col-lg-3">{selectLinksFrom}</div>
            )}
          </div>
        </div>
        <hr />

        <div className="col col-sm-12 mt-4">
          {this.props.posts.map(post => (
            <Post key={post.data.id} post={post.data} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.subreddit.posts,
  sortBy: state.subreddit.sortBy,
  linksFrom: state.subreddit.linksFrom
});

export default connect(
  mapStateToProps,
  { fetchSubredditPosts, setSortBy, setLinksFrom }
)(Posts);

// render() {
//   return (
//     <React.Fragment>
//       <div className="col col-sm-12 col-lg-3 mb-4">
//         <label>Sort by:</label>
//         <select
//           className="custom-select mb-3"
//           value={this.props.currentSortKey}
//           onChange={this.props.onSortChange}
//         >
//           {this.props.sort.map(sortKey => (
//             <option key={sortKey} value={sortKey}>
//               {sortKey}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="col col-sm-12 col-lg-3">
//         <label>Links from:</label>
//         <select
//           className="custom-select mb-3"
//           value={this.props.currentLinksFrom}
//           onChange={this.props.onLinksFromChange}
//         >
//           {this.props.linksFrom.map(link => (
//             <option key={link} value={link}>
//               {link}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="col col-sm-12">
//         {/* {this.props.posts.map(post => (
//           <Post key={post.data.id} post={post.data} />
//         ))} */}
//       </div>
//     </React.Fragment>
//   );
// }
