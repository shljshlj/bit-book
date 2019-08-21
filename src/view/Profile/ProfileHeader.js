import React from 'react';

const ProfileHeader = ({ user }) => {
    return (
        <div className="ui center profile-header">
            <div className="profile-header__avatar-box">
                <div className="ui image profile-header__avatar-content">
                    <img className="" src={user.avatarUrl} alt={user.getFullName()} />
                </div>
            </div>
            <h2 className="ui center aligned header">{user.getFullName()}</h2>
        </div>
    );
};

export default ProfileHeader;