import React from 'react';
import ModalWrapper from '../../components/ModalWrapper';

const EditProfileModal = props => {
    return (
        <ModalWrapper
            {...props}
            title="Update Profile"
        >
            <div className="ui form">
                <div className="ui small image">
                    <img src="http://via.placeholder.com/150" />
                </div>
                <div className="field">
                    <label>Full Name</label>
                    <input type="text" name="full-name" placeholder="Full Name" />
                </div>
                <div className="field">
                    <label>Bio</label>
                    <textarea rows="2"></textarea>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default EditProfileModal;

