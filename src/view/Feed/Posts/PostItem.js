import React from 'react';
import { Link } from 'react-router-dom';
import VideoPost from './VideoPost';
import TextPost from './TextPost';
import ImagePost from './ImagePost';

const PostItem = ({ post }) => {

    const postContent = {
        video: <VideoPost content={post.content} />,
        image: <ImagePost content={post.content} />,
        text: <TextPost content={post.content} />
    }

    return (
        <Link className="ui link centered card card-link">
            {postContent[post.type]}
            <div className="content">
                <span className="right floated">
                    <i className="comment icon"></i>
                    <Link to="/">3 comments</Link>
                </span>
                {post.type} post
            </div>
        </Link>
    );
};

export default PostItem;