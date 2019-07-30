import React, { Component } from 'react';
import PostList from './Posts/PostList';

class FeedPage extends Component {
    state = {
        posts: []
    }

    render() {
        const { posts } = this.state;

        return (
            <>
                {!posts.length ? 'Nothing in feed' : <PostList />}    
            </>
        );
    }
};

export default FeedPage;