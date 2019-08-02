import React, { Component } from 'react';
import { postService } from '../../services/postService';
import PostContent from './SinglePost/PostContent';
import CommentList from './Comments/CommentList';

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

        if (!post) return <div>Loading...</div>

        return (
            <>
                <div className="ui centered card">
                    <PostContent type={post.type} content={post.content} />
                </div>
                <div className="ui section divider"></div>
                <CommentList />
            </>
        );
    }
};

export default SinglePostPage;