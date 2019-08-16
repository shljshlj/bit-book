import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileStats from './ProfileStats';
import { userService } from '../../services/userService';

import './ProfilePage.css';

class ProfilePage extends Component {
    state = { user: null }

    fetchUser = async () => {
        const userId = 1;
        const user = await userService.fetchSingleUser(userId);
        this.setState({ user });
        console.log(user);
    }

    componentDidMount () {
        this.fetchUser();
    }

    render() {
        const { user } = this.state;

        if (!user) return 'Loading...';

        return (
            <div className="profile-page">
                <ProfileHeader user={user} />
                <ProfileAbout bio={user.about.bio} />
                <ProfileStats numOfPosts={user.numOfPosts} numOfComments={user.numOfComments} />
            </div>
        );
    }
}

export default ProfilePage;