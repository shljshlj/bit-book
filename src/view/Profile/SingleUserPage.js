import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileStats from './ProfileStats';
import { userService } from '../../services/userService';

import './ProfilePage.css';

class SingleUserPage extends Component {
    state = { user: null }

    fetchUser = async () => {
        const userId = this.props.match.params.userId;
        const user = await userService.fetchSingleUser(userId);
        this.setState({ user });
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

export default SingleUserPage;