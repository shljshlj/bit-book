import React from 'react';

const EditProfileButton = ({ openModal }) => {
    return (
        <button
            className="ui primary basic button"
            onClick={openModal}
        >
            <i className="edit outline icon"></i>
            Edit Profile
        </button>
    );
};

export default EditProfileButton;