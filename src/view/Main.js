import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from './Posts/FeedPage';
import SinglePostPage from './Posts/SinglePostPage';

const Main = () => {
    return (
        <main className="ui container">
            <Switch>
                <Route exact path="/" component={FeedPage} />
                <Route path="/posts/:postId" component={SinglePostPage} />
            </Switch>
        </main>
    );
};

export default Main;