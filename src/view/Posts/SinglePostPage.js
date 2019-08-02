import React, { Component } from 'react';
import { postService } from '../../services/postService';
import PostContent from './SinglePost/PostContent';
import Comments from './Comments';

class SinglePostPage extends Component {
    state = {
        post: null,
        userId: null
    }

    fetchPost = async () => {
        const postId = this.props.match.params.postId;
        const post = await postService.fetchSinglePost(postId);
        const userId = post.userId;

        this.setState({ post, userId });
    }

    componentDidMount() {
        this.fetchPost();
    }

    render() {
        const { post, userId } = this.state;
        const postId = this.props.match.params.postId;

        if (!post) return <div>Loading...</div>

        return (
            <>
                <div className="ui centered card">
                    <PostContent type={post.type} content={post.content} />
                </div>
                <div className="ui section divider"></div>
                <Comments postId={postId} userId={userId}/>
            </>
        );
    }
};

export default SinglePostPage;