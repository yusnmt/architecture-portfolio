import React from 'react';
import './profile.css';

import profile from '../../assets/profile.png';

const Profile = () => {
  return (
    <div className='ap__profile-heading section__padding' id='profile'>
        <h2 className='gradient__text'>Profile</h2>
        <img src={profile} alt='profile' />
        <p>早稲田大学大学院創造理工学研究科建築学専攻</p>
        <p>修士２年</p>
        <h3 className='name'>根本宥生</h3>
    </div>
)
}

export default Profile