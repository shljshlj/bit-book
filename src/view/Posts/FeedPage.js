import React, { Component } from 'react';
import PostList from './SinglePost/PostList';

import './FeedPage.css';

class FeedPage extends Component {
    render() {
        return (
            <>
                <PostList />
            </>
        );
    }
};

export default FeedPage;