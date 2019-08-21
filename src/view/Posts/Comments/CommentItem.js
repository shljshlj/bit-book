import React from 'react';
import { Link } from 'react-router-dom';
import { getCalendarTimeFrom } from '../../../shared/utils';

const CommentItem = ({ comment, user }) => {
    return (
        <div className="comment">
            <Link to={`/profile/${user.id}`} className="avatar">
                <img src={user.avatarUrl} alt="user avatar" />
            </Link>

            <div className="content">
                <Link to={`/profile/${user.id}`} className="author">{user.getFullName()}</Link>
                <div className="metadata">
                    <span className="date">{getCalendarTimeFrom(comment.createdAt, new Date().toISOString())}</span>
                </div>
                <div className="text">
                    {comment.body}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;