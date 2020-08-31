import React from 'react';
import './MyPosts.css';
import Post from './Post/Posts';

const MyPosts = () => {
  return <div>
My post
  <div>
<textarea></textarea>
<button>Add post</button>
</div>
<Post />
<Post />
<Post />
</div>
}

export default MyPosts;
