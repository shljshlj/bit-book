import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from './Posts/FeedPage';
import SinglePostPage from './Posts/SinglePostPage';
import PeoplePage from './People/PeoplePage';
import ProfilePage from './Profile/ProfilePage';
import SingleUserPage from './Profile/SingleUserPage';
import WelcomePage from './Welcome/WelcomePage';

import './Main.css';

const Main = ({ accessToken }) => {
    const home = accessToken ? FeedPage : WelcomePage;

    return (
        <main className="ui container main-content">
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/posts/:postId" component={SinglePostPage} />
                <Route exact path="/people" component={PeoplePage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route path="/profile/:userId" component={SingleUserPage} />
            </Switch>
        </main>
    );
};

export default Main;