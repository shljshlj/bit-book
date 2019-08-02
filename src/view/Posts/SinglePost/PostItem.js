import React from 'react';
import { Link } from 'react-router-dom';
import PostContent from './PostContent';


const PostItem = ({ post }) => {
    const { content, postId, type, commentsNum } = post;

    return (
        <Link to={`/posts/${postId}`} className="ui link centered card card-link">
            <PostContent type={type} content={content} />
            <div className="content">
                <span className="right floated">
                    <i className="comment icon"></i>
                    {commentsNum} comments
                </span>
                {type} post
            </div>
        </Link>
    );
};

export default PostItem;