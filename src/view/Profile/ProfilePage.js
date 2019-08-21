import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileStats from './ProfileStats';
import EditProfileButton from './EditProfile/EditProfileButton';
import EditProfileModal from './EditProfile/EditProfileModal';

import { userService } from '../../services/userService';

import './ProfilePage.css';

import GridContainer from '../grid/GridContainer';
import Row from '../grid/Row';
import Column from '../grid/Column';

class ProfilePage extends Component {
    state = { user: null }

    fetchUser = async () => {
        const userId = 1;
        const user = await userService.fetchSingleUser(userId);
        this.setState({ user });
        console.log(user);
    }

    componentDidMount() {
        this.fetchUser();
    }

    render() {
        const { user } = this.state;

        if (!user) return 'Loading...';

        return (
            <div className="profile-page">
                <GridContainer>
                    <Row>
                        <Column numOfColumns="sixteen">
                            <ProfileHeader user={user} />
                        </Column>
                    </Row>
                    <Row>
                        <Column numOfColumns="twelve">
                            <ProfileAbout bio={user.about.bio} />
                        </Column>
                        <Column numOfColumns="four">
                            <ProfileStats numOfPosts={user.numOfPosts} numOfComments={user.numOfComments} />
                        </Column>
                    </Row>
                </GridContainer>
                <EditProfileButton />
                <EditProfileModal />
            </div>
        );
    }
}

export default ProfilePage;