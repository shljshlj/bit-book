import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments, user }) => {
    if (!comments.length) return <div>No comments yet</div>;

    return (
        <>
            {comments.map(comment => <CommentItem key={comment.sid} comment={comment} user={user} />)}
        </>
    );
};

export default CommentList;