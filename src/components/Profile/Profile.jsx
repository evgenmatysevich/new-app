import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="http://img0.reactor.cc/pics/post/Trevor-Henderson-Siren-Head-%D0%9C%D1%80%D0%B0%D1%87%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-art-5443610.jpeg" />
      </div>
      <div>ava + description</div>

      <MyPosts />
    </div>
  );
};

export default Profile;
