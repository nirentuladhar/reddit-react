import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    return (
      <React.Fragment>
        <div className="post mb-4" style={{display: "flex"}}>
          {post.thumbnail !== "self" && <img src={post.thumbnail} style={{height: "150px", width: "150px", objectFit: "cover"}}/>}
          {post.over_18 && <span className="badge badge-danger">NSFW</span>}
          <div className="ml-3">
            <h3>{post.title}</h3>
            <p>
              submitted 15 hours ago by
              <a href={"https://reddit.com/u/" + post.author}>
                {post.author}
              </a>{" "}
            </p>

            <a role="button" href={post.url} className="btn btn-primary btn-sm">
              {post.num_comments + " comments"}
            </a>
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
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Post;
