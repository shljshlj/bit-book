import React from 'react';

const VideoPost = ({ content }) => {
    return (
        <div className="content">
            <div className="iframe-container">
                <iframe title="video" src={content} />
            </div>
        </div>
    );
};

export default VideoPost;