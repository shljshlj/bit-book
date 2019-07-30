import React from 'react';

const VideoPost = (props) => {
    return (
        <div className="content">
            <div className="iframe-container">
                <iframe src="https://www.youtube.com/embed/2Z19GXXtUkU" />
            </div>
        </div>
    );
};

export default VideoPost;