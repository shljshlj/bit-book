import React from 'react';
import { usePalette } from 'react-palette';

const image_url = './images/sunset.jpg';

const ProfileHeader = ({ user }) => {
    const { data, loading, error } = usePalette(image_url);
    const backgroundColor = data.vibrant;
    console.log(backgroundColor);

    return (
        <div className="ui center profile-header" style={{ backgroundColor: backgroundColor }} >
            <img className="ui medium centered circular image" src={user.avatarUrl} />
            <h2>{user.getFullName()}</h2>

            <div style={{ color: data.vibrant }}>
                Text with the vibrant color
            </div>
        </div>
    );
};

export default ProfileHeader;