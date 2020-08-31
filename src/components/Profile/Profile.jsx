import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return <div className='content'>
    <div>
       <img src='https://lh3.googleusercontent.com/proxy/fQPe9SatwRm-ZADV44Pey_FWwaW-WZVTTkT9qBPjpHksjwFUS5Viz-lW49anHUWburvWy2ddQibI8SNKwQwCusxBrby-T-PLw2Do_CbPRyjVPVyv0J2i_kiN' />
    </div>
       <div>
       ava + description
       </div>

      <MyPosts />
  </div>

}

export default Profile;
