import React from 'react';
import { Link } from 'react-router-dom';

const CommentItem = ({ comment }) => {
    return (
        <div className="comment">
            <Link to="/" className="avatar">
                <img src="https://semantic-ui.com/images/avatar/small/jenny.jpg" alt="user avatar" />
            </Link>

            <div className="content">
                <Link to="/" className="author">Matt</Link>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                    {comment.body}
                </div>
                <div className="actions">
                    <Link to="/" className="reply">Reply</Link>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;