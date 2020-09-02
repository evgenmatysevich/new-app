import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div className='content'>
    <div>
      <img src='https://lh3.googleusercontent.com/proxy/3mCxDY_RG716xzRG74ggnyVU3MoXUM3ooQszBy8yysEBU9jIZwPdgIRRF7NjO7AvCWP_F23rGHv9ha87Qe3hEG7NiFfvbzzDZlVyH4Oo6eX1c8PdsHKkDtOI7WA3Ys0tJdgSQFaAO12wuf1_vzszWFcW5iHZWC2vu2DkWfeS6w'/>
    </div>
    <div>
      ava + description
    </div>

    <MyPosts/>

  </div>

}

export default Profile;
