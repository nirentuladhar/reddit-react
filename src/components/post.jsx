import React, { Component } from "react";

class Post extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="post mb-4">
          {this.props.post.isNsfw ? (
            <span className="badge badge-danger">NSFW</span>
          ) : (
            ""
          )}
          <h3>{this.props.post.title}</h3>
          <p>
            submitted 15 hours ago by
            <a href={"https://reddit.com/u/" + this.props.post.author}>
              {this.props.post.author}
            </a>{" "}
          </p>

          <button type="button" className="btn btn-primary btn-sm">
            {this.props.post.num_comments + " comments"}
          </button>
          <div
            className="btn-group btn-group-sm btn-group-toggle ml-2"
            data-toggle="buttons"
          >
            <label className="btn btn-light">
              <input type="radio" name="options" id="option1" /> Source
            </label>
            <label className="btn btn-light">
              <input type="radio" name="options" id="option2" /> Share
            </label>
            <label className="btn btn-light">
              <input type="radio" name="options" id="option3" /> Save
            </label>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }

  isNsfw(props) {
    const nsfwStatus = props.nsfwStatus;
    if (nsfwStatus) {
      return;
    }
  }
}

export default Post;
