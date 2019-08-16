import React from 'react';

const ProfileAbout = ({ bio }) => {
    return (
        <div className='profile-about'>
            <p>{bio}</p>
        </div>
    );
};

export default ProfileAbout;