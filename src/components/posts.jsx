import React, { Component } from "react";
import Post from "./post";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div class="col col-sm-12">
          <Post key={post.data.id} post={post.data} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
