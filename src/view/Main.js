import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedPage from './Feed/FeedPage';

const Main = () => {
    return (
        <main className="ui container">
            <Switch>
                <Route exact path="/" component={FeedPage} />
            </Switch>
        </main>
    );
};

export default Main;