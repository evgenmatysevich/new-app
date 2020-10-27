import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";

  
const Profile = (props) => {


  return (
    <div>
      <Profileinfo />
      <MyPosts posts={props.posts}/>
    </div>
  );
};

export default Profile;
