import React, { Component } from 'react';
import _ from 'lodash';
import CommentCreate from './Comments/CommentCreate';
import CommentList from './Comments/CommentList';
import { postService } from '../../services/postService';
import { userService } from '../../services/userService';

class Comments extends Component {
    state = {
        comments: [],
        users: []
    }

    fetchCommentsAndUsers = async () => {
        const { postId } = this.props;
        const comments = await postService.fetchSinglePostComments(postId);
        const commentUserIds = _
            .chain(comments)
            .map('userId')
            .uniq()
            .value();

        console.log(commentUserIds);
        const users = await userService.fetchMultipleUsers(commentUserIds);

        console.log(users);
        this.setState({ comments, users });
    }

    componentDidMount() {
        this.fetchCommentsAndUsers();
    }

    render() {
        const { comments, users } = this.state;

        return (
            <div className="ui comments">
                <CommentCreate />
                <div className="ui section divider"></div>
                <CommentList comments={comments} users={users} />
            </div>
        )
    }
}

export default Comments;