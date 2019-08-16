import React from 'react';

const ProfileHeader = ({ user }) => {
    return (
        <div className="ui center profile-header">
            <img className="ui medium centered circular image" src={user.avatarUrl} alt="user avatar" />
            <h2 className="ui center aligned header">{user.getFullName()}</h2>
        </div>
    );
};

export default ProfileHeader;