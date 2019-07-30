import React from 'react';
import { Link } from 'react-router-dom';
import VideoPost from './VideoPost';
import TextPost from './TextPost';
import ImagePost from './ImagePost';

const PostItem = props => {

    const postContent = {
        video: <VideoPost />,
        image: <ImagePost />,
        text: <TextPost />
    }

    return (
        <div className="ui centered card">
            {postContent[props.type]}
            <div className="content">
                <span className="right floated">
                    <i className="comment icon"></i>
                    <Link to="/">3 comments</Link>
                </span>
                Post Type
            </div>
        </div>
    );
};

export default PostItem;