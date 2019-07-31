import React, { Component } from 'react';
import PostItem from './PostItem';
import { postService } from '../../../services/PostService';


class PostList extends Component {
    state = {
        posts: []
    }

    fetchPosts = async () => {
        const posts = await postService.fetchPosts();
        this.setState({ posts });
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        const { posts } = this.state;
        if (!posts.length) return <div>Nothing in feed</div>

        return (
            <div>
                {posts.map(post => <PostItem key={post.sid} post={post}/>)}
            </div>
        );
    }
};

export default PostList;