import React, { Component } from 'react';
import CommentCreate from './Comments/CommentCreate';
import CommentList from './Comments/CommentList';
import { postService } from '../../services/postService';
import { userService } from '../../services/userService';

class Comments extends Component {
    state = {
        comments: [],
        user: null
    }

    fetchCommentsAndUser = async () => {
        const { postId, userId } = this.props;
        const comments = await postService.fetchSinglePostComments(postId);
        const user = await userService.fetchSingleUser(userId);
        this.setState({ comments, user });
    }

    componentDidMount() {
        this.fetchCommentsAndUser();
    }

    render() {
        const { comments, user } = this.state;

        return (
            <div className="ui comments">
                <CommentCreate />
                <div className="ui section divider"></div>
                <CommentList comments={comments} user={user} />
            </div>
        )
    }
}

export default Comments;