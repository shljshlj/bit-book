import React from 'react';
import CommentItem from './CommentItem';

const filterUser = (comment, usersArr) => {
    return usersArr.filter(userObj => comment.userId === userObj.id)[0];
}

const CommentList = ({ comments, users }) => {
    if (!comments.length) return <div>No comments yet</div>;


    return (
        <>
            {comments.map(comment => <CommentItem key={comment.sid} comment={comment} user={filterUser(comment, users)} />)}
        </>
    );
};

export default CommentList;