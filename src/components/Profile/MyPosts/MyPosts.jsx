import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    My post
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div>
      <Post message="Hi how are you ?"/>
      <Post message="It's my first post"/>

    </div>
  </div>
}

export default MyPosts;
