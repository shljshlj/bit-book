import React, { Component } from 'react';
import CommentCreate from './Comments/CommentCreate';
import CommentList from './Comments/CommentList';
import { postService } from '../../services/postService';
import { userService } from '../../services/userService';

class Comments extends Component {
    state = {
        comments: []
    }

    fetchCommentsAndUser = async () => {
        const { postId, userId } = this.props;
        const comments = await postService.fetchSinglePostComments(postId);
        this.setState({
            comments
        });
        const user = await userService.fetchSingleUser(userId);
        console.log(user);
    }

    componentDidMount() {
        this.fetchCommentsAndUser();
    }

    render() {
        const { comments } = this.state;

        return (
            <div className="ui comments">
                <CommentCreate />
                <div className="ui section divider"></div>
                <CommentList comments={comments} />
            </div>
        )
    }
}

export default Comments;