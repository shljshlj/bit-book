import React, { Component } from 'react';
import PostList from './Posts/PostList';

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