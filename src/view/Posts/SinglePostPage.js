import React, { Component } from 'react';
import { postService } from '../../services/postService';
import PostContent from './SinglePost/PostContent';
import Comments from './Comments';

class SinglePostPage extends Component {
    state = {
        post: null
    }

    fetchPost = async () => {
        const postId = this.props.match.params.postId;
        const post = await postService.fetchSinglePost(postId);

        this.setState({ post });
    }

    componentDidMount() {
        this.fetchPost();
    }

    render() {
        const { post } = this.state;
        const postId = this.props.match.params.postId;

        if (!post) return <div>Loading...</div>

        return (
            <>
                <div className="ui centered card">
                    <PostContent type={post.type} content={post.content} />
                </div>
                <div className="ui section divider"></div>
                <Comments postId={postId} />
            </>
        );
    }
};

export default SinglePostPage;