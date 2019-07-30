import React, { Component } from 'react';
import PostList from './Posts/PostList';
import { postService } from '../../services/PostService';

import './FeedPage.css';

class FeedPage extends Component {
    state = {
        posts: [{type: 'video'}, {type: 'image'}, {type: 'text'}]
    }

    componentDidMount() {
        postService.fetchPosts();
    }

    render() {
        const { posts } = this.state;

        return (
            <>
                {!posts.length ? 'Nothing in feed' : <PostList posts={posts}/>}    
            </>
        );
    }
};

export default FeedPage;