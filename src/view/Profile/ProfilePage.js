import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import { userService } from '../../services/userService';
import { usePalette } from 'react-palette';

import './ProfilePage.css';

class ProfilePage extends Component {
    state = { user: null }

    fetchUser = async () => {
        const userId = 1;
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
                <div className='profile-about'>
                    <p></p>
                </div>

                <ProfileStats />
            </div>
        );
    }
}

export default ProfilePage;