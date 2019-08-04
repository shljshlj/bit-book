import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from './Posts/FeedPage';
import SinglePostPage from './Posts/SinglePostPage';
import PeoplePage from './People/PeoplePage';
import ProfilePage from './People/ProfilePage';

const Main = () => {
    return (
        <main className="ui container">
            <Switch>
                <Route exact path="/" component={FeedPage} />
                <Route path="/posts/:postId" component={SinglePostPage} />
                <Route exact path="/profile" component={PeoplePage} />
                <Route path="/profile/:userId" component={ProfilePage} />
            </Switch>
        </main>
    );
};

export default Main;