import React from "react";
import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let postElements =props.posts.map( p => 
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />);

  return (
    <div className="postBlok">
      <h3>My post</h3>
      <div className="myposts">
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};

export default MyPosts;
