import React from 'react';

const EditProfileButton = props => {
    return (
        <button
            className="ui primary basic button"
            onClick={props.openModal}
        >
            <i className="edit outline icon"></i>
            Edit Profile
        </button>
    );
};

export default EditProfileButton;