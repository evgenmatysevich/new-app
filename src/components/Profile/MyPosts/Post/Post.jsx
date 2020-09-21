import React from "react";
import "./Posts.css";

const Post = (props) => {
  return (
    <div className="post">
      <img src="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404__340.jpg" />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
