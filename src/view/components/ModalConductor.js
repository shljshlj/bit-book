import React from 'react';
import EditProfileModal from '../Profile/EditProfile/EditProfileModal';
import CreatePostModal from '../Posts/CreatePost/CreatePostModal';


const ModalConductor = props => {
    switch (props.currentModal) {
        case 'EDIT_PROFILE':
            return <EditProfileModal {...props} />;

        case 'CREATE_POST':
            return <CreatePostModal {...props} />;

        default:
            return null;
    }
};

export default ModalConductor;